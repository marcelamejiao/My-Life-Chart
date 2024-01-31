package xyz.marcelamejia.myLifeChartAPI.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Byte age;

    public User() {}

    public User(String name,
                Byte age) {
        this.name = name;
        this.age = age;
    }
}
