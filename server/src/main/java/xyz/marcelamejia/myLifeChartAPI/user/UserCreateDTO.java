package xyz.marcelamejia.myLifeChartAPI.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCreateDTO {

    @NotBlank
    private String name;

    @NotBlank
    private Byte age;

    public UserCreateDTO(String name,
                         Byte age) {
        this.name = name;
        this.age = age;
    }
}
