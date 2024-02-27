package xyz.marcelamejia.myLifeChartAPI.categoryWeeklyReport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.marcelamejia.myLifeChartAPI.activity.ActivityRepository;

import java.text.SimpleDateFormat;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
public class CategoryWeeklyReportService {
    final String ISO8601Format = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX";

    @Autowired
    private ActivityRepository activityRepository;

    public List<CategoryWeeklyReport> get() {

        List<CategoryWeeklyReport> report = new ArrayList<>();

        for (int i = 0; i < 168; i+=7) {
            Calendar sixMonthsAgo = Calendar.getInstance();
            sixMonthsAgo.add(Calendar.MONTH, -6);

            SimpleDateFormat iso8601DateFormat = new SimpleDateFormat(ISO8601Format);

            // Find the beginning of the week
            Calendar beginningOfWeek = (Calendar) sixMonthsAgo.clone();
            beginningOfWeek.add(Calendar.DAY_OF_WEEK,
                    beginningOfWeek.getFirstDayOfWeek() - beginningOfWeek.get(Calendar.DAY_OF_WEEK) + i);

            // Find the end of the week
            Calendar endOfWeek = (Calendar) beginningOfWeek.clone();
            endOfWeek.add(Calendar.DAY_OF_WEEK, 6);

            String formattedBeginningOfTheWeek = iso8601DateFormat.format(beginningOfWeek.getTime());
            String formattedEndOfTheWeek = iso8601DateFormat.format(endOfWeek.getTime());

            OffsetDateTime beginningOfTheWeekOffsetDateTime = OffsetDateTime.parse(formattedBeginningOfTheWeek);
            OffsetDateTime endOfTheWeekOffsetDateTime = OffsetDateTime.parse(formattedEndOfTheWeek);

            ISum sumOfDistance = this.activityRepository.sumDistanceBetweenDates(beginningOfTheWeekOffsetDateTime, endOfTheWeekOffsetDateTime);
            int weeklyDistance = sumOfDistance.getSum();

            System.out.print(sumOfDistance.getSum());

            int week = (i / 7) + 1;

            report.add(new CategoryWeeklyReport(week, weeklyDistance));
        }
        return report;
    }
}
