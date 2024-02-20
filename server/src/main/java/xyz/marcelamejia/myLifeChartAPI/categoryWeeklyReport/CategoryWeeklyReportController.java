package xyz.marcelamejia.myLifeChartAPI.categoryWeeklyReport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class CategoryWeeklyReportController {

    @Autowired CategoryWeeklyReportService categoryWeeklyReportService;

    @GetMapping("/category-weekly")
    public ResponseEntity<List<CategoryWeeklyReport>> get() {
        List<CategoryWeeklyReport> report = this.categoryWeeklyReportService.get();
        return new ResponseEntity<List<CategoryWeeklyReport>>(report, HttpStatus.OK);
    }
}
