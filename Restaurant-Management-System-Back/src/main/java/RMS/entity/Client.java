package RMS.entity;

import RMS.Enums.UserRole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client extends Personne{
    private String address;


    @OneToMany(mappedBy = "client")
    private List<Commande> commandes;

    @OneToOne(mappedBy = "client")
    Panier panier;

    public Client(String nomPersonne, String email, String motPass, String numTelel, UserRole userRole, Boolean status, String address)
    {
        super(nomPersonne,email,motPass,numTelel,userRole,status);
        this.address = address;
    }

}
