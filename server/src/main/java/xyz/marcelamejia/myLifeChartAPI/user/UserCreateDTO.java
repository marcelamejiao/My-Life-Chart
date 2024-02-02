package xyz.marcelamejia.myLifeChartAPI.user;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCreateDTO {

    @NotBlank
    private String name;

    @Min(0)
    @NotNull
    private Byte age;

    public UserCreateDTO(String name,
                         Byte age) {
        this.name = name;
        this.age = age;
    }
}
