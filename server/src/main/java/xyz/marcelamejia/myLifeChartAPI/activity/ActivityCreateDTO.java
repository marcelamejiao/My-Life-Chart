package xyz.marcelamejia.myLifeChartAPI.activity;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.text.ParseException;
import java.time.OffsetDateTime;

@Getter
@Setter
public class ActivityCreateDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String category;

    @NotNull
    private OffsetDateTime start;

    @NotNull
    private OffsetDateTime end;

    @Min(0)
    @NotNull
    private Integer distance;

    public ActivityCreateDTO(String name,
                             String category,
                             String start,
                             String end,
                             Integer distance) throws ParseException {
        this.name = name;
        this.category = category;
        this.start = OffsetDateTime.parse(start);
        this.end = OffsetDateTime.parse(end);
        this.distance = distance;
    }

}
