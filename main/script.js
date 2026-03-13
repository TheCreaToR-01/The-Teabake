const WA = '917290892771';
const PRODUCTS = [
    // HOME STYLE TEA CAKES
    { id: 'tc1', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Date & Fig Walnut', desc: 'A moist, rich and crunchy cake. Melange of Tender chopped dates, sundried figs and toasted walnuts. Wholesome and indulgent.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🍰', img: 'main/assets/Date and fig.JPG', type: "main/assets/vegan.png" },
    { id: 'tc2', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Whole Wheat Jaggery Walnut', desc: 'Stone grounded whole wheat flour, natural jaggery, and crunchy walnuts. This cake is rich and earthy. Its soft, moist crumb is deeply satisfying.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🌾', img: 'main/assets/Whole-Wheat-Jaggeryy.jpg', type: "main/assets/vegan.png" },
    { id: 'tc3', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Banana Loaf', desc: 'Our classis loaf made with overripe bananas, just the right amount of sweetness. A slice of comfort. Choose from walnuts, chocolate chips or coffee.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🍌', img: 'main/assets/Banana-Loaf.jpeg', type: "main/assets/vegan.png" },
    { id: 'tc4', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Vanilla Walnut', desc: 'A gentle, aromatic vanilla tea cake studded with toasted walnuts. Soft, fragrant, and unfailingly comforting — the kind of cake that feels like home.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🍦', img: 'main/assets/Vanilla-Walnut.jpeg', type: "main/assets/vegan.png" },
    { id: 'tc5', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Citrus Cake', desc: 'Bright, zesty, and beautifully fragrant — a sunshine-yellow loaf bursting with orange and lemon. Light-crumbed and refreshing, it pairs perfectly with a pot of tea.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🍋', img: 'main/assets/Citrus-Cake.jpeg', type: "main/assets/vegan.png" },
    { id: 'tc6', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Dark Chocolate Valencia', desc: 'Rich dark chocolate meets the bright fragrance of Valencia orange in this deeply indulgent loaf. Fudgy, intense, and just slightly bittersweet — a grown-up chocolate cake.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🍫', img: 'main/assets/Dark-Chocolate-Valencia.jpg', type: "main/assets/vegan.png" },
    { id: 'tc7', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Apple Cinnamon Crumble', desc: 'Tender spiced apple pieces folded into a cinnamon-kissed batter, finished with a buttery crumble topping. Warm, cosy, and deeply nostalgic.', prices: [{ label: '½ Kg', val: '₹1,199' }, { label: '1 Kg', val: '₹1,999' }], emoji: '🍎', img: 'main/assets/Apple crumble.JPG', type: "main/assets/vegan.png"},
    { id: 'tc8', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Lemon Ricotta Almond', desc: 'Made with almond flour for a tender crumb from ricotta and a brighty citrusy finish. This cake is perfect on its own simple, elegant and wholesome.', prices: [{ label: '½ Kg', val: '₹1,599' }, { label: '1 Kg', val: '₹2,899' }], emoji: '🍋', img: 'main/assets/Lemon-Ricotta.jpeg', type: "main/assets/veg.png" },
    { id: 'tc9', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Carrot Walnut Cake', desc: 'Spiced carrot cake with warm cinnamon and hints of nutmeg, shredded carrots. Finished with a smooth cream cheese frosting and walnuts.', prices: [{ label: '½ Kg', val: '₹1,399' }, { label: '1 Kg', val: '₹2,799' }], emoji: '🥕', img: 'main/assets/Carrot-Cake.jpeg', type: "main/assets/vegan.png" },
    { id: 'tc10', cat: 'tea-cakes', catLabel: 'Home Style Tea Cakes', name: 'Christmas Plum Cake', desc: "Our signature rich cake packed with dried fruits soaked and matured in 'Old Monk' for depth of flavor, walnuts, almonds and a touch of warm spices. Slow baked to achieve a moist and tender crumb.", prices: [{ label: '½ Kg', val: '₹1,599' }, { label: '1 Kg', val: '₹2,999' }], emoji: '🎄', img: 'main/assets/Plum-Cake.jpg', type: "main/assets/vegan.png" },

    // SOURDOUGH
    { id: 'sd1', cat: 'sourdough', catLabel: 'Sourdough Loaves', name: 'Country', desc: 'Naturally leavened and slow-fermented for depth of flavor, with a crisp artisan crust and an open chewy crumb. Mildly tangy, wholesome and beautifully rustic.', prices: [{ label: 'Loaf', val: '₹350' }], emoji: '🍞', img: 'main/assets/Country-Sourdough.jpeg', type: "main/assets/vegan.png" },
    { id: 'sd2', cat: 'sourdough', catLabel: 'Sourdough Loaves', name: 'Cranberry & Walnut', desc: 'Our classic naturally-leavened sourdough studded with plump dried cranberries and toasted walnuts. Sweet, tangy, and satisfyingly chewy — spectacular with cheese or butter.', prices: [{ label: 'Loaf', val: '₹450' }], emoji: '🍞', img: 'main/assets/Cranberry-Sourdough.jpeg', type: "main/assets/vegan.png" },
    { id: 'sd3', cat: 'sourdough', catLabel: 'Sourdough Loaves', name: 'Jalapeño & Cheddar', desc: 'A bold, savory sourdough with pockets of melted cheddar and the gentle heat of jalapeño peppers throughout. An addictive combination — cheesy, spicy, tangy.', prices: [{ label: 'Loaf', val: '₹450' }], emoji: '🧀', img: 'main/assets/Jalapeno-Sourdough.jpeg', type: "main/assets/veg.png" },
    { id: 'sd4', cat: 'sourdough', catLabel: 'Sourdough Loaves', name: 'Olive & Rosemary', desc: 'Briny  olives and fragrant rosemary woven through a naturally-leavened loaf. Mediterranean soul in every slice — extraordinary with olive oil.', prices: [{ label: 'Loaf', val: '₹420' }], emoji: '🫒', img: 'main/assets/Olive-Rosemary-Sourdough.jpeg', type: "main/assets/vegan.png" },
    { id: 'sd5', cat: 'sourdough', catLabel: 'Sourdough Loaves', name: 'Multiseed', desc: 'A nutritious, hearty sourdough loaf generously seeded with sunflower, chia, oats, pumpkin, flax and sesame. Wonderfully nutty, with a crunchy crust and chewy interior.', prices: [{ label: 'Loaf', val: '₹400' }], emoji: '🌱', img: 'main/assets/Multiseed-Sourdough.jpeg', type: "main/assets/vegan.png" },
    { id: 'sd6', cat: 'sourdough', catLabel: 'Sourdough Loaves', name: '100% Whole Wheat', desc: 'Pure whole wheat sourdough with a nutty flavour, wholesome crumb, and rustic character.', prices: [{ label: 'Loaf', val: '₹400' }], emoji: '🌱', img: 'main/assets/Whole-Wheat.jpeg', type: "main/assets/vegan.png" },

    // ITALIAN BREADS
    { id: 'ib1', cat: 'italian-breads', catLabel: 'Italian Breads', name: 'Ciabatta', desc: 'Rustic Italian bread with a crisp, lightly floured crust and an airy, open crumb. Delicate, chewy and perfect for sandwiches.', prices: [{ label: 'Pack of 2', val: '₹280' }], emoji: '🥖', img: 'main/assets/Ciabatta.jpeg', type: "main/assets/vegan.png" },
    { id: 'ib2', cat: 'italian-breads', catLabel: 'Italian Breads', name: 'Focaccia', desc: 'Infused with extra virgin olive oil, topped with heirloom cherry tomatoes, olives and rosemary, finished with a sprinkle of sea salt. Light, aromatic and vibrant.', prices: [{ label: 'Small', val: '₹250' }, { label: 'Large', val: '₹350' }], emoji: '🫒', img: 'main/assets/Focaccia.jpeg', type: "main/assets/vegan.png" },
    { id: 'ib3', cat: 'italian-breads', catLabel: 'Italian Breads', name: 'Focaccia Puglia', desc: 'This traditional flatbread from Puglia, Italy, baked to golden perfection — juicy san marzano tomatoes, briny olives, drizzled with extra virgin olive oil, infused with fragrant oregano and sea salt.', prices: [{ label: 'Small', val: '₹350' }, { label: 'Large', val: '₹450' }], emoji: '🍅', img: 'main/assets/Focaccia-Pugliese.jpeg', type: "main/assets/veg.png", type: "main/assets/vegan.png" },

    // SPECIALTY BREADS
    { id: 'sb1', cat: 'specialty-breads', catLabel: 'Specialty Breads', name: 'Brioche', desc: 'Rich buttery French bread with a tender, pillowy crumb and a delicate golden crust, subtly sweet, luxuriously soft, and beautifully versatile.', prices: [{ label: 'Loaf', val: '₹400' }], emoji: '🥐', img: 'main/assets/Brioche.jpeg', type: "main/assets/non-veg.png" },
    { id: 'sb2', cat: 'specialty-breads', catLabel: 'Specialty Breads', name: 'Japanese Shokupan', desc: 'Japanese milk bread with an ultra-soft, cloud-like crumb and delicate sweetness. Tender, fluffy and beautifully light with a fine, velvety texture.', prices: [{ label: 'Loaf', val: '₹400' }], emoji: '🍞', img: 'main/assets/Shokupan.jpeg', type: "main/assets/veg.png" },
    { id: 'sb3', cat: 'specialty-breads', catLabel: 'Specialty Breads', name: 'Babka', desc: 'Rich, buttery braided loaf swirled generously with dark chocolate ganache or cinnamon sugar filling. Sheer indulgence in every slice.', prices: [{ label: 'Loaf', val: '₹300' }], emoji: '🍫', img: 'main/assets/Babka.jpeg', type: "main/assets/veg.png" },

    // VIENNOISERIE
    { id: 'vi1', cat: 'viennoiserie', catLabel: 'Viennoiserie', name: 'Croissant', desc: 'Buttery, flaky and perfectly layered with a crisp golden crust and a soft, honeycombed interior. Made with the finest French butter, folded with patience and precision.', prices: [{ label: 'Per Piece', val: '₹220' }], emoji: '🥐', img: 'main/assets/croisssant.jpeg', type: "main/assets/veg.png" },
    { id: 'vi2', cat: 'viennoiserie', catLabel: 'Viennoiserie', name: 'Pain au Chocolat', desc: 'Delicate, buttery layers wrapped around rich dark chocolate batons. Crisp on the outside, tender within — a perfectly balanced classic French indulgence.', prices: [{ label: 'Per Piece', val: '₹245' }], emoji: '🍫', img: 'main/assets/Pain-au-Chocolat.jpeg', type: "main/assets/veg.png" },
    { id: 'vi3', cat: 'viennoiserie', catLabel: 'Viennoiserie', name: 'Cinnamon Roll', desc: 'Soft, buttery swirls layered with warm cinnamon sugar, baked until golden and finished with a delicate glaze. Cosy, fragrant, and deeply comforting.', prices: [{ label: 'Per Piece', val: '₹200' }], emoji: '🌀', img: 'main/assets/Cinnamon_Roll.jpeg', type: "main/assets/veg.png" },
    { id: 'vi4', cat: 'viennoiserie', catLabel: 'Viennoiserie', name: 'Maritozzo', desc: 'Soft, lightly sweetened brioche bun generously filled with airy whipped cream. Pillowy, delicate and irresistibly indulgent.', prices: [{ label: 'Per Piece', val: '₹250' }], emoji: '🍰', img: 'main/assets/Maritozzo.jpeg', type: "main/assets/veg.png" },
    { id: 'vi5', cat: 'viennoiserie', catLabel: 'Viennoiserie', name: 'Bagel', desc: 'Hand-rolled and gently boiled before baking for its signature satisfying chew. Dense, chewy, golden — the real thing.', prices: [{ label: 'Pack of 2', val: '₹250' }], emoji: '🥯', img: 'main/assets/Bagel.jpeg', type: "main/assets/vegan.png" },
    { id: 'vi6', cat: 'viennoiserie', catLabel: 'Viennoiserie', name: 'Cream Cheese Garlic Buns', desc: 'Pillowy buns infused with aromatic garlic cream cheese, dipped in parsley butter and cream, baked to golden perfection. Savory, rich, and utterly irresistible.', prices: [{ label: 'Per Piece', val: '₹275' }], emoji: '🧄', img: 'main/assets/Cream-Cheese-Garlic-Buns.jpeg', type: "main/assets/veg.png" },

    // TARTS & MOUSSE - House Classics
    { id: 'tm1', cat: 'house-classics', catLabel: 'Tarts, Tub Cakes & Mousse', name: 'Lemon Tart', desc: 'Crisp buttery tart shell filled with silky lemon custard. Bright, zesty, balanced with a smooth mascarpone cream. A study in perfect contrasts.', prices: [{ label: 'Per Piece', val: '₹299' }], emoji: '🍋', img: 'main/assets/Lemon-Tart.jpeg', type: "main/assets/veg.png" },
    { id: 'tm2', cat: 'house-classics', catLabel: 'Tarts, Tub Cakes & Mousse', name: 'Fresh Fruit Tart', desc: 'Smooth vanilla custard crowned with an elegant selection of seasonal fresh fruits. Colourful, delicate, and as beautiful as it is delicious.', prices: [{ label: 'Per Piece', val: '₹299' }], emoji: '🍓', img: 'main/assets/Fresh-Fruit-Tart.jpeg', type: "main/assets/veg.png" },
    { id: 'tm3', cat: 'house-classics', catLabel: 'Tarts, Tub Cakes & Mousse', name: 'Banoffee Pie', desc: 'Buttery biscuit base layered with rich caramel, fresh banana and light whipped cream. A British classic that never fails to delight.', prices: [{ label: 'Per Piece', val: '₹299' }], emoji: '🍌', img: 'main/assets/Banoffee.jpeg' , type: "main/assets/veg.png"},
    { id: 'tm4', cat: 'house-classics', catLabel: 'Tarts, Tub Cakes & Mousse', name: 'Belgian Chocolate Mousse', desc: 'Silky, airy mousse crafted with fine Belgian chocolate with a dollop of rich French cream. Pure, unapologetic chocolate indulgence.', prices: [{ label: 'Per Piece', val: '₹299' }], emoji: '🍫', img: 'main/assets/Belgian-Chocolate-Mousse.jpeg', type: "main/assets/veg.png" },

    // SIGNATURE CAKES - chef's Favourites
    { id: 'sc1', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Lamington', desc: 'A classic Australian sponge cake dipped in rich chocolate and rolled in desiccated coconut, layered with raspberry compote and whipped vanilla cream filling.', prices: [{ label: 'Serves 6', val: '₹1,799' }, { label: 'Serves 10–12', val: '₹2,999' }], emoji: '🍰', img: 'main/assets/Lamington.jpeg', type: "main/assets/veg.png" },
    { id: 'sc2', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Dark Belgian Cake', desc: 'Rich Belgian chocolate with deep cocoa notes and perfectly balanced bitter sweet finish.  A refined indulgence for those who appreciate true chocolate character ', prices: [{ label: 'Serves 6', val: '₹1,799' }, { label: 'Serves 10–12', val: '₹2,999' }], emoji: '🍫', img: 'main/assets/dark-belgian.jpeg', type: "main/assets/veg.png" },
    { id: 'sc3', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Fresh Fruit Cake', desc: 'Layers of light vanilla sponge frosted with Chantilly cream and generously adorned with the season\'s freshest fruits. Elegant, fresh and naturally beautiful.', prices: [{ label: 'Serves 6', val: '₹1,699' }, { label: 'Serves 10–12', val: '₹2,799' }], emoji: '🍓', img: 'main/assets/Fresh-Fruit-Cake.jpg', type: "main/assets/veg.png" },
    { id: 'sc4', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Tropical Twist', desc: "Delicate, moist coconut cake with goodness of coconut milk infused with shredded coconut and a hint of vanilla. Finished with a touch of pineapple glaze for a decadent indulgence. It’s Pina Colada time.", prices: [{ label: 'Serves 6', val: '₹1,699' }, { label: 'Serves 10–12', val: '₹2,799' }], emoji: '🥭', img: 'main/assets/Tropical-Twist.jpeg', type: "main/assets/veg.png" },
    { id: 'sc5', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Zesty Lamington', desc: 'Our take on the classic lamington — brightened with a citrus-infused sponge and a lemony coconut coating. Familiar yet refreshingly different.', prices: [{ label: 'Serves 6', val: '₹1,699' }, { label: 'Serves 10–12', val: '₹2,799' }], emoji: '🍋', img: 'main/assets/Zesty-Lamington.jpeg', type: "main/assets/veg.png" },
    { id: 'sc6', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Sticky Toffee Date Cake', desc: 'A deeply indulgent British classic — moist date sponge drenched in warm toffee sauce and crowned with a generous pour of fresh cream or vanilla ice cream.', prices: [{ label: 'Serves 6', val: '₹1,799' }, { label: 'Serves 10–12', val: '₹2,999' }], emoji: '🍯', img: 'main/assets/Sticky-Toffee.jpeg', type: "main/assets/veg.png" },
    { id: 'sc7', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Caramelised Nut Cake', desc: 'Layers of buttery sponge with a crown of beautifully caramelised mixed nuts — almonds, pecans and walnuts — in a rich toffee glaze. Spectacular and indulgent.', prices: [{ label: 'Serves 6', val: '₹1,799' }, { label: 'Serves 10–12', val: '₹2,999' }], emoji: '🥜', img: 'main/assets/Caramelised-Nut_Cake.jpeg', type: "main/assets/veg.png" },
    { id: 'sc8', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Forêt Noire', desc: 'Decadent chocolate sponge layered with silky cream and luscious cherry compote, finished with dark chocolate shavings.', prices: [{ label: 'Serves 6', val: '₹1,699' }, { label: 'Serves 10–12', val: '₹2,799' }], emoji: '🍒', img: 'main/assets/Forest-Noire.jpeg', type: "main/assets/veg.png" },
    { id: 'sc9', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Classic Vanilla Bean Cake', desc: 'A light yet satisfying soft, buttery loaf infused with pure Madagascar vanilla bean, topped with classic cream chantilly. Simple, elegant and made with love in every slice', prices: [{ label: 'Serves 6', val: '₹1,599' }, { label: 'Serves 10–12', val: '₹2,699' }], emoji: '🍦', img: 'main/assets/Vanilla-Bean.jpeg', type: "main/assets/veg.png" },
    { id: 'sc10', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Trifle', desc: 'Layers of soft sponge, fresh fruit, silky custard and luscious whipped cream. Delicately assembled for a dessert that is vibrant and creamy. Perfect for sharing.', prices: [{ label: 'Per Piece', val: '₹350' }, { label: 'Serves 6', val: '₹1,800' }, { label: 'Serves 10–12', val: '₹3,099' }], emoji: '🍮', img: 'main/assets/Triffle.jpeg', type: "main/assets/veg.png" },
    { id: 'sc11', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Tiramisu', desc: 'Home-baked sponge soaked in espresso, layered with rich mascarpone cream, dusted with finest cocoa powder. The Italian classic in a generous, shareable tub.', prices: [{ label: 'Per Piece', val: '₹350' }, { label: 'Serves 6', val: '₹1,800' }, { label: 'Serves 10–12', val: '₹3,199' }], emoji: '☕', img: 'main/assets/Tiramisu.jpeg', type: "main/assets/non-veg.png" },
    { id: 'sc12', cat: 'chef-favourites', catLabel: 'Signature Cakes', name: 'Tres Leches', desc: 'Light vanilla sponge soaked in a blend of three milks, finished with a cloud of whipped cream, pistachios and rose petals. Moist, delicate and beautifully indulgent — to share.', prices: [{ label: 'Per Piece', val: '₹350' }, { label: 'Serves 6', val: '₹1,800' }, { label: 'Serves 10–12', val: '₹3,099' }], emoji: '🌹', img: 'main/assets/Tres-leches.jpeg', type: "main/assets/veg.png" },
];
const TESTIMONIALS = [
    { name: 'Priya Sharma', location: 'South Delhi', text: 'The sourdough is hands-down the best I\'ve had in Delhi. That crust, that chew — it\'s what weekends are made for. Rashmi really knows her craft.', stars: 5 },
    { name: 'Arjun Malhotra', location: 'Gurugram', text: 'Ordered the Christmas Plum Cake for our family gathering. Everyone asked where I got it from. I didn\'t tell them — I wanted to keep this gem to myself!', stars: 5 },
    { name: 'Sneha Kapoor', location: 'Hauz Khas', text: 'The Pain au Chocolat is criminally good. Buttery, perfectly laminated, that dark chocolate centre. I\'ve had these in Paris and honestly, these are just as good.', stars: 5 },
    { name: 'Rohit Gupta', location: 'Lajpat Nagar', text: 'We ordered the Tiramisu Tub for 10 people and it was devoured in minutes. The mascarpone cream, the espresso sponge — absolutely restaurant quality.', stars: 5 },
    { name: 'Meera Iyer', location: 'Vasant Kunj', text: 'The carrot walnut cake is my go-to for every celebration. That cream cheese frosting is something else. Rashmi puts so much love into everything she bakes.', stars: 5 },
    { name: 'Kabir Bhatia', location: 'Defence Colony', text: 'Finally a bakery in Delhi doing proper artisan bread. The jalapeño cheddar sourdough is my obsession. Order it warm if you can — life-changing.', stars: 5 },
    { name: 'Ananya Singh', location: 'GK-2', text: 'Tres Leches Tub for my birthday — the whole family was in awe. Moist, creamy, those rose petals on top made it so beautiful. Will order again and again.', stars: 5 },
    { name: 'Vikram Nair', location: 'Malviya Nagar', text: 'I live near the bakery and have had almost everything on the menu. The Banana Loaf and Date Fig Walnut are my staples. Genuinely better than anything I\'ve found in the city.', stars: 5 },
    { name: 'Divya Menon', location: 'Saket', text: 'Placed an order on WhatsApp and it was so smooth and personal. The Focaccia Puglia arrived warm, perfectly seasoned. I could eat it every single day.', stars: 5 },
    { name: 'Aditya Khanna', location: 'Noida', text: 'The Dark Belgian Cake for my wife\'s birthday was absolutely stunning. Looked incredible, tasted even better. Rashmi is the real deal — an artist.', stars: 5 },
    { name: 'Nandita Rao', location: 'CR Park', text: 'Ordered the Babka and it\'s everything I hoped for. That chocolate swirl, that buttery braid — it disappeared within the hour. My family declared it the best thing they\'ve eaten.', stars: 5 },
    { name: 'Sameer Joshi', location: 'Dwarka', text: 'Drove 45 minutes to pick up my order and I\'d do it every week. The Sticky Toffee Date Cake and Cinnamon Rolls are pure magic. So grateful this bakery exists.', stars: 5 },
    { name: 'Tanvi Patel', location: 'Faridabad', text: 'The Lemon Tart is extraordinary — that balance of the crisp shell and the silky custard is perfection. It tastes like something from a Parisian pâtisserie.', stars: 5 },
    { name: 'Rahul Verma', location: 'Nehru Place', text: 'Rashmi is incredibly responsive on WhatsApp. She genuinely cares about every order. The quality is consistent, the freshness is real. A rare find in Delhi.', stars: 5 },
    { name: 'Pooja Agarwal', location: 'Jangpura', text: 'Ordered the Lamington Cake for a corporate gifting event. Everyone was impressed. Multiple people messaged to ask where it was from. Highly, highly recommend.', stars: 5 },
    { name: 'Siddharth Bose', location: 'East Delhi', text: 'The Croissants are wonderful — that golden crunch, the honeycomb interior. You can tell they\'re made with serious butter and serious care. A proper croissant, finally.', stars: 5 },
    { name: 'Kavya Reddy', location: 'Sarojini Nagar', text: 'Forêt Noire for New Year\'s Eve — what a treat. Those cherries, that chocolate, the Chantilly cream. Beautifully done. The Tea Bake never disappoints.', stars: 5 },
    { name: 'Manish Kapoor', location: 'Model Town', text: 'The Whole Wheat Jaggery Walnut loaf has replaced store-bought bread in our house entirely. It\'s wholesome, delicious, and keeps for days. Rashmi\'s baking is a gift.', stars: 5 },
    { name: 'Ishita Chaudhary', location: 'Dwarka Mor', text: 'Maritozzo was a revelation — I\'d never had one before and now I\'m obsessed. That pillowy brioche with whipped cream is the most indulgent breakfast I\'ve ever had.', stars: 5 },
    { name: 'Rajesh Sharma', location: 'Pitampura', text: 'Placed a bulk order for a Diwali party — 8 cakes, various sizes. Everything arrived beautifully packaged, every single one tasted extraordinary. The Tea Bake is exceptional.', stars: 5 },
    { name: 'Sangeeta Chopra', text: 'Cranberry sourdough is fab. Walnut date tea cake was polished yesterday. Too good', stars: 5 },
    { name: 'Gunjan Goila', text: 'Milk bread, cranberry n walnut bread are outstanding. Croissant too are excellent a must eat.', stars: 5 },
    { name: 'Nidhi Jagtiani', text: "Omg Rashmi, Loved this Tiramisu. I'm constantly eating.", stars: 5 },
    { name: 'Devesh Bahl', text: "Hi Rashmi, had the delicious and flavourful bread this morning. It was light and flaky. Well done.", stars: 5 },
    { name: 'Sangeeta Batra', text: "Cannot express my gratitude in words!!! All the three desserts were appreciated and loved!!! In fact there is just a wee bit left!!! All gone!!! So proud of you my dear", stars: 5 },
    { name: 'Rajesh Tara', text: "Thank you Rashmi for the wonderful cake you sent us. My wife loved it. The best part is that all the flavours are so well blended that they came out distinctly and yet in sync. I loved the rum aroma.", stars: 5 },
    { name: 'Ankita Kant', text: "Hola Rashmi, Thnx a ton for the yummy yummy sourdough. I just ate the walnut one and was super tasty. Thnx dear for thinking of me. Keep making delicious baked. Wishing you all the best, lots of love. I was to have one piece but landed off having three.", stars: 5 },
    { name: 'Nitin Datwani', text: "The focaccia was too good, it transported me back to Italy this morning and I couldn't stop eating it...", stars: 5 },
    { name: 'Rohit Dangwal', text: "I’ve previously had the pleasure of devouring one of Rashmi’s brilliant lemon blueberry cake. The cake were blown away by the brilliant combination/complex layering of berry jam, dark chocolate and cream. Best part is- the cake was not overtly sweet and very well balanced. Lemon tart, brownies & Focaccia bread were all top notch. Tiramisu cake is on our wishlist next. Much recommended to all with a sweet tooth and to make a special occasion more memorable. Cheers!!", stars: 5 },
    { name: 'Mayank Gupta', text: "Amazing breads and yummy cakes!", stars: 5 },
    { name: 'Rohit Kumar', text: "I absolutely loved the presentation, and the taste was even better!", stars: 5 },
];

const FAQS = [
    {
        q: 'What defines your bakery?',
        a: [
            'We are an artisan bakery kitchen crafting small-batch dry tea cakes, signature cakes, viennoiseries, and handcrafted breads. Every creation is guided by precision, restraint, and exceptional ingredients.'
        ]
    },
    {
        q: 'Are your products made fresh daily?',
        a: [
            'Yes. Everything is baked fresh daily in our kitchen. We do not mass produce. Freshness and quality are non-negotiable for us.'
        ]
    },
    {
        q: 'Do you use preservatives?',
        a: [
            'No artificial preservatives. Our products are made using high-quality ingredients, which means they are best enjoyed fresh within the recommended time frame.'
        ]
    },
    {
        q: 'Do you offer eggless/vegan options?',
        a: [
            'Yes. Our menu largely includes thoughtfully developed eggless/vegan selections across multiple categories.'
        ]
    },
    {
        q: 'Is pick-up available?',
        a: [
            'Yes, orders can be picked up from the kitchen.'
        ]
    },
    {
        q: 'How far in advance should I place my order?',
        a: [
            '* Dry tea cakes & breads: 24 hours recommended',
            '* Signature cakes & desserts: 48 hours recommended',
            '* Custom or large-format orders: 3–5 days',
            '* For special occasions, earlier reservations ensure availability.'
        ]
    },
    {
        q: 'Do you deliver?',
        a: [
            'Yes. We offer delivery within selected areas. Delivery slots are limited to ensure product quality during transit. Timed windows may be requested; we strive to honour preferences.'
        ]
    },
    {
        q: 'Can I schedule delivery for a specific time?',
        a: [
            'You may request a preferred time window. While we do our best to accommodate, slight variations may occur due to traffic and logistics.'
        ]
    },
    {
        q: 'What is your cancellation policy?',
        a: [
            'Orders once confirmed are prepared specifically for you. Cancellations within 24 hours of delivery may not be eligible for a refund.'
        ]
    },
    {
        q: 'Do you create bespoke cakes?',
        a: [
            'Yes. Our signature cakes can be tailored in flavour, size, and aesthetic. We work with a refined design approach — elegant, minimal, and timeless.'
        ]
    },
    {
        q: 'How should I store my order?',
        a: [
            '* Cream cakes & desserts: Refrigerate. Bring to room temperature 30–45 minutes before serving.',
            '* Viennoiseries: Best enjoyed fresh the same day.',
            '* Breads: Store in a cool, dry place and consume within 48 hours.',
        ]
    },
    {
        q: 'Do you cater to events or corporate gifting?',
        a: [
            'Yes. We curate luxury dessert selections, artisanal hampers, and event tables for intimate gatherings and corporate occasions.'
        ]
    },
];


// ── RENDER PRODUCTS ──
function renderProducts(filter) {
    const grid = document.getElementById('pgrid');
    const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
    grid.innerHTML = list.map(p => `
    <div class="pcard" onclick="openModal('${p.id}')">
        <div class="pcard-img">
            <img src="${p.img}" alt="${p.name}" loading="lazy"
                onerror="this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:linear-gradient(135deg,#e8ddd0,#d4c4b0)\'>${p.emoji}</div>'">
                <div class="pcard-over"></div>
                <div class="pcard-quick">View Details</div>
        </div>
        <div class="pcard-body">
            <p class="pcard-cat">${p.catLabel}</p>
            <h3 class="pcard-name">${p.name}<img class="pcard-type" src="${p.type}" alt="dietary-type"></h3>
            <p class="pcard-desc">${p.desc}</p>
            <div class="pcard-foot">
                <span class="pcard-price">${p.prices[0].val}<span style="font-family:'Jost',sans-serif;font-size:.6rem;font-weight:300;color:var(--muted);margin-left:3px">/ ${p.prices[0].label}</span></span>
                ${p.prices.length > 1 ? `<span class="pcard-size">+${p.prices.length - 1} size${p.prices.length > 2 ? 's' : ''}</span>` : `<span class="pcard-size">${p.prices[0].label}</span>`}
            </div>
        </div>
    </div>`).join('');
}

function filterCat(filter, btn) {
    renderProducts(filter);
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

// ── MODAL ──
function openModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    document.getElementById('modalCat').textContent = p.catLabel;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalEmoji').textContent = p.emoji;
    document.getElementById('modalPrices').innerHTML = p.prices.map(pr => `
    <div><span class="mprice-label">${pr.label}</span><span class="mprice-val">${pr.val}</span></div>`).join('');
    const img = document.getElementById('modalImg');
    const ph = document.getElementById('modalPh');
    img.src = p.img; img.style.display = 'block'; ph.style.display = 'none';
    img.onerror = () => { img.style.display = 'none'; ph.style.display = 'flex' };
    const msg = encodeURIComponent(`Hi The Tea Bake! I'd like to order. Please let me know how to proceed. Thank you!`);
    document.getElementById('modalWA').href = `https://wa.me/${WA}?text=${msg}`;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}
function handleModalClick(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() });

// ── WHATSAPP ──
function openWA(txt) {
    const msg = encodeURIComponent(`Hi The Tea Bake! I'd like to order. Please let me know how to proceed. Thank you!`);
    window.open(`https://wa.me/${WA}?text=${msg}`, '_blank');
}

// ── REVIEWS ──
function renderReviews() {
    const track = document.getElementById('reviewsTrack');
    const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
    track.innerHTML = doubled.map(r => `
    <div class="rcard">
        <p class="rcard-text">"${r.text}"</p>
        <div><span class="rcard-name">${r.name}</span><span class="rcard-loc">${r.location}</span></div>
    </div>`).join('');
}

// ── FAQ ──
function renderFaqs() {
    const list = document.getElementById('faqList');
    if (!list || !FAQS.length) return;
    list.innerHTML = FAQS.map((item, idx) => {
        const num = (idx + 1).toString().padStart(2, '0');
        const body = item.a.map(p => `<p>${p}</p>`).join('');
        const openClass = idx === 0 ? ' open' : '';
        return `
        <article class="faq-item${openClass}">
            <button class="faq-btn" type="button">
                <span class="faq-question">${item.q}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
                ${body}
            </div>
        </article>`;
    }).join('');

    list.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            list.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

// ── NAV DRAWER ──
function toggleDrawer() {
    const ham = document.getElementById('ham');
    const drawer = document.getElementById('drawer');
    const scrim = document.getElementById('scrim');
    ham.classList.toggle('open');
    drawer.classList.toggle('open');
    scrim.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}
function closeDrawer() {
    document.getElementById('ham').classList.remove('open');
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('scrim').classList.remove('open');
    document.body.style.overflow = '';
}

// ── CURSOR ──
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e => { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px' });
function bindCursor() {
    document.querySelectorAll('a,button,.pcard,.cat-btn').forEach(el => {
        el.addEventListener('mouseenter', () => cur.classList.add('big'));
        el.addEventListener('mouseleave', () => cur.classList.remove('big'));
    });
}

// ── SCROLL NAV ──
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── REVEAL — IntersectionObserver ──
// Elements start visible (no JS = no problem), JS adds hidden then animates in
function initReveal() {
    const els = document.querySelectorAll('.r');
    els.forEach(el => el.classList.add('hidden'));
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                // stagger siblings
                const siblings = [...e.target.parentElement.children].filter(c => c.classList.contains('r'));
                const idx = siblings.indexOf(e.target);
                e.target.style.transitionDelay = (idx * 0.08) + 's';
                e.target.classList.add('vis');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
}

// ── INIT ──
renderProducts('tea-cakes');
renderReviews();
renderFaqs();
bindCursor();

initReveal();