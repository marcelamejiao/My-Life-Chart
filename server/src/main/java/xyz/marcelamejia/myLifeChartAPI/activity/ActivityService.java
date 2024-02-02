package xyz.marcelamejia.myLifeChartAPI.activity;

import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.marcelamejia.myLifeChartAPI.user.User;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<Activity> getAll() {
        return this.activityRepository.findAll();
    }


    public Optional<Activity> getById(Long id) {
        return activityRepository.findById(id);
    }

    public Activity createActivity(ActivityCreateDTO data, User user) {
        Activity newActivity = modelMapper.map(data, Activity.class);
        newActivity.setUser(user);
        return this.activityRepository.save(newActivity);
    }

    public boolean deleteById(Long id) {
        Optional<Activity> foundActivity = this.activityRepository.findById(id);

        if(foundActivity.isPresent()) {
            this.activityRepository.delete(foundActivity.get());
            return true;
        }

        return false;
    }
}
