package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idArticle;
    private String name;
    private double prix;
    private String description;
    private Categorie categorie;
    @ManyToOne
    private Menu menu;
}
