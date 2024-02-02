package xyz.marcelamejia.myLifeChartAPI.user;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.marcelamejia.myLifeChartAPI.exceptions.NotFoundException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        List<User> allUsers = this.userService.getAll();
        return new ResponseEntity<List<User>>(allUsers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> found = this.userService.getById(id);

        if(found.isPresent()) {
            return new ResponseEntity<User>(found.get(), HttpStatus.OK);
        }

        throw new NotFoundException(String.format("User with this id: %d does not exist", id));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody UserCreateDTO data) {
        User newUser = this.userService.createUser(data);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteById(@PathVariable Long id) {
        boolean deleted = this.userService.deleteById(id);

        if(deleted == true) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

        throw  new NotFoundException(String.format("User with id: %d does not exist, could not delete", id));
    }





}
