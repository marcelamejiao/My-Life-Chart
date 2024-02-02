package xyz.marcelamejia.myLifeChartAPI.user;

import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(UserCreateDTO data) {
        User newUser = modelMapper.map(data, User.class);
        return this.userRepository.save(newUser);
    }

    public boolean deleteById(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);

        if(foundUser.isPresent()) {
            this.userRepository.delete(foundUser.get());
            return true;
        }

        return false;
    }
}
