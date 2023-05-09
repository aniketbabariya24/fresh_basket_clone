
function navbar() {
    return `<div id="navbar">
    <div id="logo">
        <a href="index.html">
        <img src="images/Fresh_Basket_Logo.jpg" alt=""></a>
    </div>
    <div id="right">
        <div style="display: flex; width: 100%; justify-content: space-between;">
            <div><span>Online Slots Availability</span></div>
            <p>|</p>
            <div><span>Fresh & Fast</span></div>
            <p>|</p>
            <div><span>Store Locator</span></div>
            <p>|</p>
            <div><span>Contact Us</span></div>
            <p>|</p>
            <div>
                <select name="" id="">
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="thane">Thane</option>
                    <option value="delhi ncr">Delhi NCR</option>
                    <option value="navi mumbai">Navi Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                </select>
            </div>
            <div>
                <button id="pinBtn">Enter Pincode</button>
            </div>
            <div style="display: flex;" class="log">
                <div>
                    <span><a href="login.html" class="login">Login</a></span>
                </div>
                <div>
                    <span>|</span>
                    <span><a href="join_as.html" class="register">Register</a></span>
                </div>
            </div>
        </div>
        <div style="display: flex;">
            <div style="width: 89%;" id="search-div" >
            <div id="ts">
            <input type="text" id="query">
            <button id="Tsearch"><img src="https://www.naturesbasket.co.in/Images/search-button.jpg" alt="" srcset=""></button>
              </div>
                    
            </div>
            <div style="display: flex;">
                <div>
                    <img src="https://img.icons8.com/ios-filled/41/85b93c/gear.png"/>
                </div>
                <a href="./cart.html">
                <div>
                    <img src="https://img.icons8.com/sf-regular/40/85b93c/shopping-cart.png" />
                    <span id="item_Count" class="count">0</span>
                    
                </div>
                </a>
            </div>
        </div>
    </div>
</div> 
<div id="navbar2">
        <div style="width:15% ; border: 1px solid #b71761;">
            <span style="color:#b71761 ; font-size: 18px;" id="shop">SHOP BY CATEGORY <i class="fas fa-caret-down"></i>
                <div class="dropdown_menu">
                    <ul>
                        <li><a href="#" id="gift">Gifting <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-1">
                                <ul>
                                    <li><a href="#">The Gift Studio</a></li>
                                    <li><a href="#">E-Gift voucher</a></li>
                                    <li><a href="#">Bulk/Customised Gifting</a></li>
                                    <li><a href="#">Gift vouchers</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Health <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-2">
                                <ul>
                                    <li><a href="#">Weight Management Foods</a></li>
                                    <li><a href="#">Heart - Healthy Foods</a></li>
                                    <li><a href="#">Wellness & Immunity Boosters</a></li>
                                    <li><a href="#">Diabeic - Friendly Foods</a></li>
                                    <li><a href="#">Problem Solution Foods</a></li>
                                    <li><a href="#">Organic</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Fruits & vegetables <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-3">
                                <ul>
                                    <li><a href="#">Vegeatables</a></li>
                                    <li><a href="#">Exotic Vegetables</a></li>
                                    <li><a href="#">Fruits</a></li>
                                    <li><a href="#">Organic Fruits & vegetables</a></li>
                                    <li><a href="#">Exotic Fruits</a></li>
                                    <li><a href="#">Canned & Frozen</a></li>
                                    <li><a href="#">Cold - Pressed Fresh Juices</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Delicatessen & Cheese <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-4">
                                <ul>
                                    <li><a href="#">Fresh Snacks & Party Food</a></li>
                                    <li><a href="#">Antipasti</a></li>
                                    <li><a href="#">Goverment Cheese Shop</a></li>
                                    <li><a href="#">Cold Cuts & Sausages</a></li>
                                    <li><a href="#">Cheese Spread, Slices & Others</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">International cuisine <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-5">
                                <ul>
                                    <li><a href="#">Italian & Continental</a></li>
                                    <li><a href="#">Middle-Eastern</a></li>
                                    <li><a href="#">Condiments</a></li>
                                    <li><a href="#">Flours, Grains & More</a></li>
                                    <li><a href="#">Mexican</a></li>
                                    <li><a href="#">Salad Dressing</a></li>
                                    <li><a href="#">Vinegars & Mustards</a></li>
                                    <li><a href="#">Salt, Sugar & Substitutes</a></li>
                                    <li><a href="#">Pan-Asian</a></li>
                                    <li><a href="#">Banking Ingredients</a></li>
                                    <li><a href="#">oils</a></li>
                                    <li><a href="#">Soups</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Confectionary & Patisserie <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-6">
                                <ul>
                                    <li><a href="#">Chocolates</a></li>
                                    <li><a href="#">Dessert Mixes, Sauces & Toppings</a></li>
                                    <li><a href="#">Ice Creams</a></li>
                                    <li><a href="#">Confectionery</a></li>
                                    <li><a href="#">Baking Ingredients</a></li>
                                    <li><a href="#">Patisserie</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Meats,seafood and Egg<i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-7">
                                <ul>
                                    <li><a href="#">Fresh Meats & Seafood</a></li>
                                    <li><a href="#">Cold cuts & Sausages</a></li>
                                    <li><a href="#">Packaged sea food & Meats</a></li>
                                    <li><a href="#">Eggs</a></li>
                                    <li><a href="#">Frozen</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Breakfast & dairy<i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-8">
                                <ul>
                                    <li><a href="#">Cereals, Bars & Others</a></li>
                                    <li><a href="#">Jams, Preserves & Conserves</a></li>
                                    <li><a href="#">Indian Breakfast Favourites </a></li>
                                    <li><a href="#">Honey</a></li>
                                    <li><a href="#">Spreads</a></li>
                                    <li><a href="#">Milk, Yougurt & other Dairy Drinks</a></li>
                                    <li><a href="#">Butters & Margarines</a></li>
                                    <li><a href="#">Bakery</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Instant Meal & Aids<i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-9">
                                <ul>
                                    <li><a href="#">Ready to cook</a></li>
                                    <li><a href="#">Ready to Eat</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Books</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Snacks & Beverages<i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-10">
                                <ul>
                                    <li><a href="#">Cookies & Crackers</a></li>
                                    <li><a href="#">Frozen Snacks</a></li>
                                    <li><a href="#">Antipasti</a></li>
                                    <li><a href="#">Dry Snacks</a></li>
                                    <li><a href="#">Fresh Snacks & Party Food</a></li>
                                    <li><a href="#">Relishes & Pickles</a></li>
                                    <li><a href="#">Teas</a></li>
                                    <li><a href="#">Concentrate</a></li>
                                    <li><a href="#">Energy Drinks & Milk Additives</a></li>
                                    <li><a href="#">Juice</a></li>
                                    <li><a href="#">Coffee</a></li>
                                    <li><a href="#">Dairy Drinks</a></li>
                                    <li><a href="#">Water</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Indian Grocery<i class="fas fa-caret-right"></i></a>
                            <div class="dropdown_menu-11">
                                <ul>
                                    <li><a href="#">Flours, Grains & More</a></li>
                                    <li><a href="#">Cooking Pastes & Saues</a></li>
                                    <li><a href="#">Cooking Spices & Powders</a></li>
                                    <li><a href="#">Salt, Sugar & Substitues</a></li>
                                    <li><a href="#">Oils</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </span>
            <!-- <span><img src="https://img.icons8.com/ios-glyphs/15/b71761/sort-down.png" /></span> -->
        </div>
        <div style=" width: 85%; display: flex; justify-content: space-around;">
            <div>
            <a href="myorder.html"><span>MY ORDERS</span></a>
                
            </div>
            <div>
                <SPAN>GIFTING</SPAN>
            </div>
            <div>
                <SPAN>REWARDS</SPAN>
            </div>
            <div>
                <SPAN>BLOG</SPAN>
            </div>
            <div>
                <SPAN>OFFERS</SPAN>
            </div>
            <div>
                <SPAN>CONNOISSEUR'S SELECTION</SPAN>
            </div>
            <div>
                <SPAN>BOOK STORE VISIT</SPAN>
            </div>
        </div>
    </div>
    <div  class="popup">
        <div class="close-btn">&times;</div>
        <div class="form">
            <h2>Enter Your Delivery Pincode</h2>
            <div class="form-element">
                <input type="text" id="pincode" maxlength="6" placeholder="Delivery Pincode">
                <button id="submit">SUBMIT</button>
            </div>
            <div class="p">
                <p>Entering your delivery pincode will allow us to show you the product available in your area and to ensure timely delivery.</p>
            </div>
        </div>
    </div>`
};

export default navbar;


{/* <div style="text-align: center;" class="searchItems">
                        <h3 style="color: #b71761; font-weight: bold; margin-top: 10px;">Trending Searches</h3>
                        <ul>
                            <li>Organic</li>
                            <li>Fresh Artisinal Breads</li>
                            <li>Cold cuts & Seafood</li>
                            <li>Diabetic Friendly Foods</li>
                            <li>L'Exclusif</li>
                            <li>Healthy Alternatives</li>
                            <li>Birthdays & Anniversary Gift Hampers</li>
                            <li>Platters & Dips</li>
                            <li>Smoked Cheese</li>
                            <li>Ice crems & Desserts</li>
                            <li>Keto-Paleo</li>
                        </ul>
                    </div> */}
                    //  <img src="https://img.icons8.com/plumpy/40/85b93c/gear--v2.png"/>

                    