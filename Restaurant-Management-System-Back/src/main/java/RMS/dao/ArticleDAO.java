package RMS.dao;

import RMS.entity.Article;
import RMS.entity.Categorie;
import RMS.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface ArticleDAO extends JpaRepository<Article, Long> {
    public List<Article> findArticlesBycategorie(@Param("categorie") Categorie categorie);

    Page<Article> findArticlesByRestaurantIdRestaurant(@Param("restaurantId") Long restaurantId, Pageable pageable);
    Page<Article> findArticlesByRestaurantIdRestaurantAndNameContainingIgnoreCase(
            @Param("restaurantId") Long restaurantId,
            @Param("name") String name,
            Pageable pageable
    );
}
