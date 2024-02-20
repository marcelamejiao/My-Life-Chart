package xyz.marcelamejia.myLifeChartAPI.categoryWeeklyReport;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryWeeklyReport {

    private int week;

    private int km;

    public CategoryWeeklyReport () {}

    public CategoryWeeklyReport (int week,
                                 int km) {
        this.week = week;
        this.km = km;
    }
}
