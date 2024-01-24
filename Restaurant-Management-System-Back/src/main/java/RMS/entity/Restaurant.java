package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.lang.reflect.Array;
import java.util.List;

@Entity
@Data
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRestaurant;
    private String nomRestaurant;
    private String description;
    private String brandImage ;
    @OneToMany(mappedBy = "restaurant")
    private List<ProprietaireRestu> proprietaires;
    @OneToOne(mappedBy = "restaurant")
    private Menu menu;
}
