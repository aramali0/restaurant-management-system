package RMS.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMenu;
    @OneToOne(cascade = CascadeType.ALL)
    private Restaurant restaurant;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "menu")
    private List<Article> articles;

}
