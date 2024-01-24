package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Entity
@Data
public class Client extends Personne{
    private String address;
    @OneToMany(mappedBy = "client")
    private List<Commande> commandes;
}
