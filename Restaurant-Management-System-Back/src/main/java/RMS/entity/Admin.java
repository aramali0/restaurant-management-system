package RMS.entity;

import RMS.Enums.UserRole;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Admin extends Personne{


    public Admin(String nomPersonne, String email, String motPass, String numTelel, UserRole userRole, Boolean status)
    {
        super(nomPersonne,email,motPass,numTelel,userRole,status);
    }


}
