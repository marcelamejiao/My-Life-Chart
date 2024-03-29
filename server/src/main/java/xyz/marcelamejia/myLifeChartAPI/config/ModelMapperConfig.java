package xyz.marcelamejia.myLifeChartAPI.config;

import xyz.marcelamejia.myLifeChartAPI.converters.StringTrimConverter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper mapper = new ModelMapper();

        mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
        mapper.getConfiguration().setSkipNullEnabled(true);

        return mapper;
    }
}
