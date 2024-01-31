package xyz.marcelamejia.myLifeChartAPI.activities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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

    public Activity () {}

    public Activity (String name,
                     String category,
                     OffsetDateTime start,
                     OffsetDateTime end,
                     Integer distance) {
        this.name = name;
        this.category = category;
        this.start = start;
        this.end = end;
        this.distance = distance;
    }
}
