package RMS.entity;

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

    public Client( String nomPersonne, String email, String motPass, String numTelel, String address)
    {
        super(nomPersonne,email,motPass,numTelel);
        this.address = address;
    }


}
