package xyz.marcelamejia.myLifeChartAPI.activity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import xyz.marcelamejia.myLifeChartAPI.user.User;

import java.time.OffsetDateTime;

@Entity
@Table(name = "activities")
@Getter
@Setter
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String category;

    @Column
    private OffsetDateTime start;

    @Column
    private OffsetDateTime end;

    @Column
    private Integer distance;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Activity () {}

    public Activity (String name,
                     String category,
                     OffsetDateTime start,
                     OffsetDateTime end,
                     Integer distance,
                     User user) {
        this.name = name;
        this.category = category;
        this.start = start;
        this.end = end;
        this.distance = distance;
        this.user = user;
    }
}
