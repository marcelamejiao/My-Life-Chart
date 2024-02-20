package xyz.marcelamejia.myLifeChartAPI.activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import xyz.marcelamejia.myLifeChartAPI.categoryWeeklyReport.ISum;

import java.time.OffsetDateTime;

public interface ActivityRepository extends JpaRepository<Activity, Long> {

    @Query("SELECT ifnull(SUM(a.distance), 0) as sum FROM Activity AS a WHERE a.start BETWEEN :startWeek AND :endWeek")
    ISum sumDistanceBetweenDates(@Param("startWeek") OffsetDateTime startWeek,
                                       @Param("endWeek") OffsetDateTime endWeek);
}
