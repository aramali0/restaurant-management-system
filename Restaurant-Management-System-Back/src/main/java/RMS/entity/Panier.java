package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPanier ;
    private int quantite;

    @OneToOne(cascade = CascadeType.ALL)
    private Client client;
    @ManyToMany( cascade = CascadeType.ALL)
    private List<Article> articles;

}
