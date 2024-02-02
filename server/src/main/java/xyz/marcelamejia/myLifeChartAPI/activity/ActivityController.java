package xyz.marcelamejia.myLifeChartAPI.activity;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.marcelamejia.myLifeChartAPI.exceptions.NotFoundException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping
    public ResponseEntity<List<Activity>> getAll() {
        List<Activity> allActivities= this.activityService.getAll();
        return new ResponseEntity<List<Activity>>(allActivities, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Optional<Activity> found = this.activityService.getById(id);

        if(found.isPresent()) {
            return new ResponseEntity<Activity>(found.get(), HttpStatus.OK);
        }

        throw new NotFoundException(String.format("Activity with this id: %d does not exist", id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Activity> deleteById(@PathVariable Long id) {
        boolean deleted = this.activityService.deleteById(id);

        if(deleted == true) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

        throw  new NotFoundException(String.format("Activity with id: %d does not exist, could not delete", id));
    }

}
