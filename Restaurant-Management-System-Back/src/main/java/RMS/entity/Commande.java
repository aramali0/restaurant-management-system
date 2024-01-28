package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCommande;
    private Date date;
    private String status;
    private double totalPrix;
    @OneToMany
    private List<Article> articles;
    @ManyToOne
    private Client client;

    public Commande(Date date, Client client, List<Article> articles, String status) {
        this.date = date;
        this.client = client;
        this.articles = articles;
        this.status = status;
        this.calculateTotalPrix();
    }

    public void calculateTotalPrix() {
        if (articles != null && !articles.isEmpty()) {
            this.totalPrix = articles.stream().mapToDouble(Article::getPrix).sum();
        } else {
            this.totalPrix = 0.0;
        }
    }
}
