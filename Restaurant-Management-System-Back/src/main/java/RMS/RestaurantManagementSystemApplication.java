package RMS;

import RMS.dao.*;
import RMS.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Date;

@SpringBootApplication
public class RestaurantManagementSystemApplication implements Runnable {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantManagementSystemApplication.class, args);
	}
	@Autowired
	ClientDAO clientDAO;
	@Autowired
	RestaurantDAO restaurantDAO;
	@Autowired
	ProprietaireRestaurantDAO pDAO;
	@Autowired
	CommandeDAO commandeDAO;

	@Autowired
	ArticleDAO articleDAO;

	@Autowired


	@Override
	public void run() {
		ProprietaireRestu p1 = new ProprietaireRestu("hamza","hamza@gmail.com","123","0605040303",200);
		Client c1 = new Client("simo","simo@gmail.com","123","0605040303","2 pk");
		Client c2 = new Client("otmane","otmane@gmail.com","123","0605040303","uld 90");
		Client c3 = new Client("idrissi","idrissi@gmail.com","123","0605040303","04");
		Client c4 = new Client("hajar","hajar@gmail.com","123","0605040303","sm");

		pDAO.save(p1);
		clientDAO.save(c2);
		clientDAO.save(c3);
		clientDAO.save(c4);
		clientDAO.save(c1);

		ArrayList<ProprietaireRestu> proprietaireRestus = new ArrayList<>();
		proprietaireRestus.add(p1);

		Restaurant restaurant = new Restaurant("Mc","fast food","later",proprietaireRestus);
		restaurantDAO.save(restaurant);

		Article article1 = new Article("sandwich",90,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant);
		Article article2 = new Article("pizza",90,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant);
		Article article3 = new Article("Tacos",90,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant);

		articleDAO.save(article1);
		articleDAO.save(article2);
		articleDAO.save(article3);

		ArrayList<Article> articles = new ArrayList<>();
		articles.add(article1);
		articles.add(article2);
		articles.add(article3);



		Commande commande1 = new Commande(new Date(),c1,articles);


		commandeDAO.save(commande1);

	}
}
