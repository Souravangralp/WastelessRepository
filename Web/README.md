# How to use

## Login

Application requires authentication to use. This is something that is setup by the Admin as the users has to be assigned
to a specific location. Admin-user has a link `Lisää käyttäjä` in which a new user can be created.

Application automatically navigates to login if the user is not authenticated. After login user is redirected to main
page.

## Main page

On load the main page shows the current week's predictions.

The predictions contains the following attributes:

  - Date of the prediction
  - Menu for the day (user can select another menu if the prefetched menu is not correct)
  - Predictions:
      - Number of diners
      - Total waste in kg
      - Line waste in kg
      - Plate waste in kg
      - Production waste in kg
  - Production:
      - An input field for how many diners food has been prepared for
  - Actual input fields
      - Number of all diners
      - Number of diners with special diet
      - Line waste in kg
      - Plate waste in kg
      - Production waste in kg
      - Optional comment (this is required if the waste is greater than the configured maximum)

After modifying any of the fields the user can save the form. Saved fields are used to calculate new predictions.

### Selecting week and location

By default predictions are fetched for the current week and users first location. These can be changed by accessing the
inputs before predictions. Date selection always selects the whole week. Location list is populated with locations which
user has access to.

## Report

For further analyze there's a link `Raportti` where user has access to `PowerBI` -report based on the inputted waste
amounts.

## Mukesh
 - Firstly go to the "~\Web\Wasteless\ClientApp" and open in a editor such as VS code.
 - Add missing  package by running "npm install rimraf".
 - Run the project with "npm run start".
 - Open '~\Web\Wasteless\ClientApp\src\authConfig.js'
 - change the redirect URI to 'redirectUri: https://localhost:5001/'.

 - Goto Visual Studio, open the folder cloned from github.
 - From the folder structure, go to "Web" and open the solution (.sln file) in it.
 - Add the following packages from the Nuget in the opened solution.

 ``` 
 Download dotnet package 6.0.200 (defined in global.json)
 <PackageReference Include="Microsoft.AspNetCore.ApiAuthorization.IdentityServer" Version="5.0.0" />
 <PackageReference Include="Microsoft.AspNetCore.Identity.UI" Version="5.0.0" />
 <PackageReference Include="Microsoft.AspNetCore.SpaServices.Extensions" Version="6.0.0" />
 <PackageReference Include="Microsoft.EntityFrameworkCore" Version="5.0.0" />
 <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="5.0.0">

 <PackageReference Include="Microsoft.EntityFrameworkCore.Relational.Design" Version="1.1.6" />
 <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="5.0.0" />
 <PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="5.0.0">
 <PackageReference Include="Microsoft.Identity.Web" Version="1.20.0" />
 <PackageReference Include="Microsoft.Identity.Web.UI" Version="1.10.0" />

 ```

 - After doing the above, go to 'Wasteless.Models' in web project and click on 'FactMenuItem'.
 - In the above class find 'MenuOption' which will be showing error because its been initialized multiple times, rename it your liking (in my case its MenuOptionNew).
 - Now go to 'Controllers/MenuController'. In 'GetMenus' change the return type to 'MenuOptionNew'.
 - Afterwards go to 'Data/Waterservice' and change the 'GetMenus' Method's return type to 'MenuOptionNew' also comment '.Select(x => x.ToDto())' line because we still don't know what exactly the business model was and its requirements.
 - An in the same above method change the QueryAllAsync<Dataype> to 'MenuOptionNew'. 
