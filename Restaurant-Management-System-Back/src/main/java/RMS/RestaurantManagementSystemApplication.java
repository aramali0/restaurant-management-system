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
		Client c6 = new Client("simo1","simo@gmail.com","123","0605040303","2 pk");
		Client c7 = new Client("simo2","simo@gmail.com","123","0605040303","2 pk");
		Client c8 = new Client("simo3","simo@gmail.com","123","0605040303","2 pk");
		Client c2 = new Client("otmane","otmane@gmail.com","123","0605040303","uld 90");
		Client c3 = new Client("idrissi","idrissi@gmail.com","123","0605040303","04");
		Client c4 = new Client("hajar","hajar@gmail.com","123","0605040303","sm");
		Client c5 = new Client("reem","reem@gmail.com","123","900990909","04");

		pDAO.save(p1);
		clientDAO.save(c2);
		clientDAO.save(c3);
		clientDAO.save(c4);
		clientDAO.save(c1);
		clientDAO.save(c5);
		clientDAO.save(c6);
		clientDAO.save(c7);
		clientDAO.save(c8);

		ArrayList<ProprietaireRestu> proprietaireRestus = new ArrayList<>();
		proprietaireRestus.add(p1);

		Restaurant restaurant = new Restaurant("Mc","fast food","later",proprietaireRestus, 4);
		Restaurant restaurant2 = new Restaurant("Gourmet Grove Bistro","fast food","later",proprietaireRestus,7);
		Restaurant restaurant3 = new Restaurant("Urban Harvest Kitchen","fast food","later",proprietaireRestus,8);
		Restaurant restaurant4 = new Restaurant("Culinary Canvas Cafe","fast food","later",proprietaireRestus,9);

		restaurantDAO.save(restaurant);
		restaurantDAO.save(restaurant2);
		restaurantDAO.save(restaurant3);
		restaurantDAO.save(restaurant4);

		Article article1 = new Article("sandwich",80,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant2,3);
		Article article2 = new Article("Pizza",10,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant2,4);
		Article article3 = new Article("Tacos",20,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant2,6);
		Article article13 = new Article("sandwich",80,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant2,3);
		Article article14 = new Article("Pizza",10,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant2,4);
		Article article15 = new Article("Tacos",20,"kkkkkkkkk",Categorie.FAST_FOOD,restaurant2,6);

		Article article4 = new Article("Sunrise Scramble Delight",12,"kkkkkkkkk",Categorie.ICECREAMS,restaurant2,8);
		Article article5 = new Article("Pancake Paradise Platter",102,"kkkkkkkkk",Categorie.ICECREAMS,restaurant2,9);
		Article article6 = new Article("Berry Bliss Smoothie Bowl",17,"kkkkkkkkk",Categorie.ICECREAMS,restaurant3,9);

		Article article7 = new Article("Midnight Mocha Madness",22,"kkkkkkkkk",Categorie.BREAKFATS,restaurant4,1);
		Article article8 = new Article("Strawberry Swirl Spectacle",23,"kkkkkkkkk",Categorie.BREAKFATS,restaurant2,8);
		Article article9 = new Article("Pistachio Perfection Parade",10,"kkkkkkkkk",Categorie.BREAKFATS,restaurant3,9);

		Article article10 = new Article("Mango Tango Mocktail",7,"kkkkkkkkk",Categorie.DRINKS,restaurant2,4);
		Article article11 = new Article("Blueberry Basil Breeze",8,"kkkkkkkkk",Categorie.DRINKS,restaurant3,1);
		Article article12 = new Article("Citrus Splash Refresher",2,"kkkkkkkkk",Categorie.DRINKS,restaurant4,4);
		articleDAO.save(article1);
		articleDAO.save(article2);
		articleDAO.save(article3);
		articleDAO.save(article4);
		articleDAO.save(article5);
		articleDAO.save(article6);
		articleDAO.save(article7);
		articleDAO.save(article8);
		articleDAO.save(article9);
		articleDAO.save(article10);
		articleDAO.save(article11);
		articleDAO.save(article12);
		articleDAO.save(article13);
		articleDAO.save(article14);
		articleDAO.save(article15);


		ArrayList<Article> articles1 = new ArrayList<>();
		ArrayList<Article> articles2 = new ArrayList<>();
		ArrayList<Article> articles3 = new ArrayList<>();
		ArrayList<Article> articles4 = new ArrayList<>();
		ArrayList<Article> articles5 = new ArrayList<>();
		ArrayList<Article> articles6 = new ArrayList<>();
		articles1.add(article1);
		articles1.add(article2);
		articles2.add(article3);
		articles2.add(article4);
		articles3.add(article5);
		articles3.add(article6);
		articles4.add(article7);
		articles4.add(article8);
		articles5.add(article9);
		articles5.add(article10);
		articles6.add(article11);
		articles6.add(article12);



		Commande commande1 = new Commande(new Date(),c1,articles1,"Pending");
		Commande commande2 = new Commande(new Date(),c2,articles2,"Delevred");
		Commande commande3 = new Commande(new Date(),c3,articles3,"Delevred");
		Commande commande4 = new Commande(new Date(),c4,articles4,"Delevred");
		Commande commande5 = new Commande(new Date(),c1,articles5,"Pending");
		Commande commande6 = new Commande(new Date(),c2,articles6,"Pending");


		commandeDAO.save(commande1);
		commandeDAO.save(commande2);
		commandeDAO.save(commande3);
		commandeDAO.save(commande4);
		commandeDAO.save(commande5);
		commandeDAO.save(commande6);

	}
}
