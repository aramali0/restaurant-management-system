package RMS.dao;

import RMS.entity.Article;
import RMS.entity.Panier;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface PanierDAO extends JpaRepository<Panier, Long> {
    @Modifying
    @Transactional
    @Query("UPDATE Panier p SET p.articles = :articles WHERE p.idPanier = :panierId")
    void addArticleToPanier(@Param("panierId") Long panierId, @Param("articles") List<Article> articles);
}
