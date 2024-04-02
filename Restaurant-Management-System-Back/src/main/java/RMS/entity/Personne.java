package RMS.entity;

import RMS.Enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@NoArgsConstructor
public class Personne  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPersonne;
    private String nomPersonne;
    private String email;
    private String motPass;
    private String numTelel;
    UserRole userRole;
    private boolean status;

    public Personne(String nomPersonne, String email, String motPass, String numTelel, UserRole userRole, boolean status) {
        this.nomPersonne = nomPersonne;
        this.email = email;
        this.motPass = motPass;
        this.numTelel = numTelel;
        this.userRole = userRole;
        this.status = status;
    }


}
