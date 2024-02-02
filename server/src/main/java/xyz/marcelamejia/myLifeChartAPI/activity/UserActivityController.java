package xyz.marcelamejia.myLifeChartAPI.activity;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.marcelamejia.myLifeChartAPI.exceptions.NotFoundException;
import xyz.marcelamejia.myLifeChartAPI.user.User;
import xyz.marcelamejia.myLifeChartAPI.user.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users/{userId}/activities")
public class UserActivityController {

    @Autowired
    private ActivityService activityService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Activity>> getAll(@PathVariable("userId") Long userId) {
        Optional<User> foundUser = this.userService.getById(userId);

        if(foundUser.isPresent()) {
            return new ResponseEntity<List<Activity>>(foundUser.get().getActivities(), HttpStatus.OK);
        }

        throw new NotFoundException(String.format("User with this id: %d does not exist", userId));
    }

    @PostMapping
    public ResponseEntity<Activity> createUserActivity(@PathVariable("userId") Long userId, @Valid @RequestBody ActivityCreateDTO data) {
        Optional<User> foundUser = this.userService.getById(userId);

        if(foundUser.isPresent()) {
            Activity newActivity = this.activityService.createActivity(data, foundUser.get());
            return new ResponseEntity<Activity>(newActivity, HttpStatus.CREATED);
        }

        throw new NotFoundException(String.format("User with this id: %d does not exist", userId));
    }
}
