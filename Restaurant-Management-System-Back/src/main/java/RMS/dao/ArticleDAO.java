package RMS.dao;

import RMS.entity.Article;
import RMS.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleDAO extends JpaRepository<Article, Long> {
}
