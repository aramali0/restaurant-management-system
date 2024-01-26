package RMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data
@NoArgsConstructor
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPersonne;
    private String nomPersonne;
    private String email;
    private String motPass;
    private String numTelel;

    public Personne(String nomPersonne, String email, String motPass, String numTelel) {
        this.nomPersonne = nomPersonne;
        this.email = email;
        this.motPass = motPass;
        this.numTelel = numTelel;
    }

}
