package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idArticle;
    private String name;
    private double prix;
    private String description;
    private Categorie categorie;
    private int rating;
    @ManyToOne
    private Restaurant restaurant;


    public Article(String name, double prix, String description, Categorie categorie,Restaurant restaurant, int rating)
    {
        this.name =name;
        this.prix = prix;
        this.description = description;
        this.categorie = categorie;
        this.restaurant = restaurant;
        this.rating = rating;
    }
}
