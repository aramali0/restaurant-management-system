package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;
@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPersonne;
    private String nomPersonne;
    private String email;
    private String motPass;
    private String numTelel;

}
