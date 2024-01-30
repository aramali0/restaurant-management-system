package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    @Lob
    private byte[] imageUrl;
    @ManyToOne
    private Restaurant restaurant;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Panier> paniers;
    public Article(String name, double prix, String description, Categorie categorie,Restaurant restaurant, int rating)
    {
        this.name =name;
        this.prix = prix;
        this.description = description;
        this.categorie = categorie;
        this.restaurant = restaurant;
        this.rating = rating;
    }
    public Article(String name, double prix, String description, Categorie categorie,byte[] imageUrl,Restaurant restaurant)
    {
        this.name =name;
        this.prix = prix;
        this.description = description;
        this.categorie = categorie;
        this.restaurant = restaurant;
        this.imageUrl = imageUrl;
    }
}
