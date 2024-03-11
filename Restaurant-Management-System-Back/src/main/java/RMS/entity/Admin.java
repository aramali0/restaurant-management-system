package RMS.entity;

import RMS.Enums.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Admin extends Personne{


    public Admin(String nomPersonne, String email, String motPass, String numTelel, UserRole userRole,Boolean status)
    {
        super(nomPersonne,email,motPass,numTelel,userRole,status);
    }


}
