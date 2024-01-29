package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRestaurant;
    private String nomRestaurant;
    private String description;
    private String brandImage ;
    @OneToMany(mappedBy = "restaurant")
    private List<ProprietaireRestu> proprietaires;
    @OneToMany(mappedBy = "restaurant")
    private List<Article> articles;
    private int rating;


    public Restaurant(String nomRestaurant, String description, String brandImage, List<ProprietaireRestu> proprietaires, int rating)
    {
        this.nomRestaurant = nomRestaurant;
        this.description=description;
        this.brandImage =brandImage;
        this.proprietaires =proprietaires ;
        this.articles = new ArrayList<>();
        this.rating = rating;

    }
}
