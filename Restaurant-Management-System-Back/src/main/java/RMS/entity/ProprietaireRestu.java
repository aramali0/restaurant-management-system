package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class ProprietaireRestu extends Personne{
    private Long payement;
    @ManyToOne(cascade = CascadeType.ALL)
    private Restaurant restaurant;

}
