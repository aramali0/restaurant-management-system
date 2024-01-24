package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCommande;
    @OneToMany
    private List<Article> articles;
    @ManyToOne(cascade = CascadeType.ALL)
    private Client client;

}
