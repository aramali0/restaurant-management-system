package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProprietaireRestu extends Personne{
    private int payement;
    @ManyToOne(cascade = CascadeType.ALL)
    private Restaurant restaurant;

    public ProprietaireRestu( String nomPersonne, String email, String motPass, String numTelel, int payement)
    {
        super(nomPersonne,email,motPass,numTelel);
        this.payement = payement;
    }
}
