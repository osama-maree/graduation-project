
### graduation-project
# A Website for the Palestinian Tabou
#### This document was submitted in fulfilment of the requirements for the " Graduation Project" course, during the academic year 2022 - 2023 (Second Semester). 
### ACKNOWLEDGEMENT
- First of all, we would like to thank God Almighty for giving us the opportunity and guidance to achieving our goal and to be successful in this part. Then we would like to thank our families for their upbringing of and their tireless efforts and support in every path we take to achieve our dreams and goals.

- We would like to express our special thanks to mentor Dr. Yousef Daraghma for his time and efforts he provided throughout the year. Your useful advice and suggestions were really helpful to us during the project’s completion. In this aspect, we are eternally grateful to you.

- Finally, all thanks to group members for sharing the positivity and invaluable assistance.

### ABSTRACT
- The idea of this project is designing the TABOU website to meet the needs of the Palestinian citizen.

- During our visit to the Land Registry Directorate in Tulkarm, we noticed that the completion of transactions by citizens or employees, from selling to buying, mortgaging, sorting, and many others, require time and burden, in addition to the need for a large number of official papers attested by departments and other official bodies. Therefore, we design a website for the Tabou that enables users to log in, create transactions for selling or buying lands, and track their transactions. The website is designed according to the requirements collected from the Land Registry Directorate. 

- We aim to operate a web-based website - for the Directorate of Land Registry - that facilitates citizens and employees, so that transactions are completed easily to the fullest without the need to waste time.

### Problem Statement

- As we mentioned briefly in the introduction about several issues in the subject that would waste the citizen's time in order to complete a transaction.
- As the completion of a transaction on your land needs to take a vacation from your work and personally go to the Land Registry and complete the transaction, and the problem lies in whether this transaction is not done through one government department and you need several other government departments, for example (a sale contract from the court, clearance of the municipality, etc.) 

- The matter will become more difficult and complicated, which would exhaust the citizen and assign him financially and physically instead of the delay that will occur when waiting for the roles, and if you are outside the borders of the country and need to do one of the land transactions such as selling, for example, you will have to authorize someone to follow these procedures and you will not be able to complete them in person.

- At this stage, we are planning to complete a site through which you can complete transactions electronically as much as possible as much as possible by providing a smooth and simple user interface that allows the user to open a transaction such as selling, for example, and track it electronically and find out if there is a defect in this transaction immediately and know the defect and work to fix it as soon as possible to complete the procedures faster and less tired and effort.

### OBJECTIVE

1.	Building a website that keeps a record of transactions and citizens' rights and properties.
2.	Ensure that the website is responsive and easy to handle.
3.	Ensure data protection and preservation from damage and loss instead of papers.
4.	Ensure that the site achieves its desired goal, which is to make it easier for citizens, save money and time, and reduce the burden.
5.	The platform should be easy to navigate and use, even for individuals with limited technical knowledge or experience

### Process Model 
We know that the project will go through a lot of changes in both functionality and design throughout the development time, and these changes happen due to three reasons, stated below:
1. We know what the general shape of the project is and what we want it to do, but we haven’t decided on the details which will require some changes in the design in the future.
2. Because most of us will be learning new frameworks for programming various parts of the project (i.e., front-end, back-end, etc...), So with time, we’ll get more familiar with these frameworks and therefore, find better and more efficient ways to solve problems and design a different approach for tackling these problems.
3. Our desire to add a new feature or to remove one if found necessary.
So, we wanted a development model that is flexible and easy to integrate changes with, and because of that, we decided to use an agile model which compared to other development models offers great advantages, to list some:
- Agile is an incremental approach and each increment is delivered within a certain time interval and between these time intervals comes the opportunity to apply changes to the design, functionality, or logic if needed, unlike the waterfall model in which after the development starts you can’t change the design.
- The way that agile works, it gives us and the client a working project within some time interval, and that project can be tested for bugs and given to people to use and give feedback and change some aspects in the next time interval, unlike other models that don’t provide a fully working product until the end of the development phase.
- Agile divides the project into increments which makes it easier to design these increments, rather than designing a complex system in one phase.
- Agile provides different models each one provides different techniques and tools to apply and achieve agile model principles, but in our case, we used the Scrum model, for the following reasons:
    - It is easy to use, mainly because it provides you with general guidelines to follow and it is up to you how to do them, which is easier than learning a new workflow.
     - Fast response to changes, where a new change can be easily added to the backlog, and therefore taken into consideration in the future plans.

![ssss](https://github.com/osama-maree/graduation-project/assets/108696087/44be14f1-d478-4b0a-855a-1d5f9186f1cc)
-

For our project to be done, we plan to follow the Agile process model. Agile process model refers to a software development approach based on iterative development. We are planning to break project tasks into small iterations (scrums), where each scrum will take two weeks. The division of the entire project into scrums helps to minimize the project risk and to reduce the overall project delivery time requirements.

### Functional Requirement
- Example of The Organizational Structure (Land Registry):

  ![Screenshot 2023-06-22 114605](https://github.com/osama-maree/graduation-project/assets/108696087/b7fa9ae4-7e52-4be8-9c53-fa8165860aeb)
  --
> User:
- The system must provide the Citizen " User " with the ability to:
   - Logging in to his account.
   - Logging out of his account.
   - Submitting of a land sale transaction.
   - Submitting an Limiting a legacy transaction.
   - Submitting a mortgage transaction.
   - Submitting a land fragmentation transaction.
   - Submitting a land sorting transaction.
   - Know the status of the transaction submitted instantly.
   - Inquire about his lands.
> Employee:
- The system must provide the employee with the ability to:
  - Creating accounts for users – citizens.
  - Modifying user data – citizens.
  - Receiving and processing user-citizen transactions such as buying and selling, etc.
  - Pay the transaction cost to complete it.
  - Inquiry from the municipality about the clearance of the user - the citizen, the description of the land and the land plan.
  - Inquiry from the Ministry of Interior about the personal data of the citizen.
  - Inquiry from the Survey Department about the survey plan.
  - Inquiry from the Sharia courts about Limiting a legacy and the sale contract.
  - Inquiry from the Ministry of Foreign Affairs about limiting a legacy document.
  - Receiving and processing the sale and purchase of land.
  - Receiving and processing the land sorting transaction.
  - Receiving and processing land fragmentation transactions.
  - Receiving and processing a land mortgage transaction.
  - Receiving and processing an Limiting a legacy transaction.
> Admin:
- The system should provide the manager with the ability to:
  - Creating accounts for employees.
  - Inquiry from the municipality about the clearance of the user - the citizen, the description of the land and the land plan.
  - Inquiry from the Ministry of Interior about the personal data of the citizen.
  - Inquiry from the Survey Department about the survey plan.
  - Inquiry from the Sharia courts about Limiting a legacy and the sale contract.
  - Inquiry from the Ministry of Foreign Affairs about Limiting a legacy document.
  - Assign leave to an employee and freeze his account.
  - Tracking employee's workflow.
- I attached the analysis file on the right, you can view it.
> Authentication
- Login page for different types from actor in our website

![Screenshot 2023-06-22 122625](https://github.com/osama-maree/graduation-project/assets/108696087/ab7fb595-2a26-4d3d-9ba9-dad8f9c95976)
-

---

- If you forget your password, you must enter your email to reset your password

![Screenshot 2023-06-22 123829](https://github.com/osama-maree/graduation-project/assets/108696087/59b0fdce-b2e2-4bc1-812a-e5bd0421ae06)
-

---

- The code has been sent to my email
  
![Screenshot 2023-06-22 122910](https://github.com/osama-maree/graduation-project/assets/108696087/8108045e-2fa4-46b1-8855-2be8b63d93c4)
![Screenshot 2023-06-22 122956](https://github.com/osama-maree/graduation-project/assets/108696087/7cbc0d74-d7cd-42e8-b8ce-1522760bcd6a)
-

---

- You enter the code and the system will verify it
  
![Screenshot 2023-06-22 123037](https://github.com/osama-maree/graduation-project/assets/108696087/8425b941-f795-4f9c-8e8b-46ee8de3553d)
-

---

- If correct, the following screen will appear
  
![Screenshot 2023-06-22 123203](https://github.com/osama-maree/graduation-project/assets/108696087/51623b0d-5a34-4b1b-bac5-d909eb34d081)
-

---

- Here you can modify the password

![Screenshot 2023-06-22 123401](https://github.com/osama-maree/graduation-project/assets/108696087/c335bbff-4d2f-4ffb-ad94-93a7c4576af0)
-

---

> First Actor -> User <-

- Home Page

![Screenshot 2023-06-22 124147](https://github.com/osama-maree/graduation-project/assets/108696087/cc476e02-1519-4424-8d4b-750854a2a5f2)
-

---

- When you press the movement button, the following menu appears, and you can choose any operation you want to perform

![Screenshot 2023-06-22 162253](https://github.com/osama-maree/graduation-project/assets/108696087/0af3999c-63eb-4536-8ec3-949077d5cd2b)
-

---

- When clicking on the button to sell, all the details required for this transaction appear, as well as for the rest of the transactions

![screencapture-localhost-3001-sale-2023-06-22-16_25_35](https://github.com/osama-maree/graduation-project/assets/108696087/c0d75471-9a05-4747-8e5e-25b63a06552a)
![screencapture-localhost-3001-sorting-2023-06-22-16_27_35](https://github.com/osama-maree/graduation-project/assets/108696087/116db34b-a710-4577-910b-3ec432709c56)
![screencapture-localhost-3001-fregmantation-2023-06-22-16_28_02](https://github.com/osama-maree/graduation-project/assets/108696087/9eebbd8b-c8fe-4c38-84b2-1741c6c4a80b)
![screencapture-localhost-3001-mortgage-2023-06-22-16_28_50](https://github.com/osama-maree/graduation-project/assets/108696087/a16c158a-3b35-4a8f-a4d3-d5f694d8a39a)
![screencapture-localhost-3001-inheretance-2023-06-22-16_29_15](https://github.com/osama-maree/graduation-project/assets/108696087/e27526f4-20b5-4270-a136-f49df8309bdf)
-

---

- When filling in the data and pressing the submit button, the following appears

![Screenshot 2023-06-22 163227](https://github.com/osama-maree/graduation-project/assets/108696087/7a36f0b7-984e-4efa-a052-24b6f65531bc)
-

---

- When the data is filled in and the transaction is completed successfully, the following page appears

![screencapture-localhost-3001-inheretance-2023-06-22-16_33_30](https://github.com/osama-maree/graduation-project/assets/108696087/c26a4bef-a523-4420-95a7-1917d4151830)
-

---

- When you fill in the data and the operation fails, the following page appears

![screencapture-localhost-3001-sorting-2023-06-22-16_35_25](https://github.com/osama-maree/graduation-project/assets/108696087/b685a728-0065-4c88-a3f9-595797ac8ae3)
-

And so on for all of these movements

---

- When you press the الاستعلام عن button, the following menu appears, and you can choose any operation you want to perform

![Screenshot 2023-06-22 164535](https://github.com/osama-maree/graduation-project/assets/108696087/8ed0ab6e-5c5b-4295-921f-e1aa00e9e303)
-

---

- When you press the الاراضي button, the following page will appears

![Screenshot 2023-06-22 164702](https://github.com/osama-maree/graduation-project/assets/108696087/ec2e18d9-3800-45fa-a934-5d1c5f426474)
-

- When you press the سير المعاملات button, the following page will appears with all details for transactions

![Screenshot 2023-06-22 164845](https://github.com/osama-maree/graduation-project/assets/108696087/7738f3b4-70de-4771-98b9-c240c4c0c07d)
-

---

- When you press the حالة المعاملة button, the following page will appears, message from employee about transaction

![Screenshot 2023-06-22 165006](https://github.com/osama-maree/graduation-project/assets/108696087/45dd5759-80aa-4fca-8b5f-007312134534)
-

---

- If the status of the transaction is in progress, you can modify one of its details

![Screenshot 2023-06-22 165222](https://github.com/osama-maree/graduation-project/assets/108696087/7b02ac27-5586-4e70-a463-b0251d7782bc)
-

---

- When you click on View, the image appears or the file is downloaded
 
![screencapture-localhost-3001-user-mort-64655fd6fb33146f98273acc-2023-06-22-16_52_56](https://github.com/osama-maree/graduation-project/assets/108696087/f14de11a-d31c-46f1-82fc-a1e246e27ef9)
-

---

- When you click on Edit, the following page appears

![Screenshot 2023-06-22 165329](https://github.com/osama-maree/graduation-project/assets/108696087/9ea91c35-515e-4ff7-888d-0419b9e9b672)
-

---

> Second Actor -> Employee <-

- Home page

![screencapture-localhost-3001-homeEmployee-2023-07-01-15_46_42](https://github.com/osama-maree/graduation-project/assets/108696087/5baaa19c-aed5-41ad-9cd9-79c75fdc3752)
-

---

- When clicking on the five transactions of all kinds, a drop-down list will appear with four options, and when clicking on any of them, the following will appear

![Screenshot 2023-07-01 160437](https://github.com/osama-maree/graduation-project/assets/108696087/3fe5b634-d7cd-4244-b92e-3aa9d1cf5146)
-

---

- When you click on the search icon, all the details of this transaction appear, and the process of processing the transaction begins through from uncompleted transactions, and the following appears. If the transaction is accepted, it goes to the list of accepted transactions to pay the fees. If it is rejected, it goes to the rejected transactions.

![Screenshot 2023-07-01 154823](https://github.com/osama-maree/graduation-project/assets/108696087/a3b54631-9b1f-461d-b1b0-b5d71e4dac51)
-

---

- Here, the option will appear to confirm the process, either to accept or reject it
  
![Screenshot 2023-07-01 154905](https://github.com/osama-maree/graduation-project/assets/108696087/242ee152-1523-47ff-960c-6e77f650ad7f)
-

---

- Here is a list of accepted currencies and are ready to pay their fees
  
![Screenshot 2023-07-01 161926](https://github.com/osama-maree/graduation-project/assets/108696087/9c0e75e0-2c7b-41dd-8e9f-8f3354246e36)
-

---

- When you click on the search icon, the transaction details appear 

![Screenshot 2023-07-01 155029](https://github.com/osama-maree/graduation-project/assets/108696087/98e9a5f1-bd66-4094-9ced-b3a286be6332)
-

- Here the confirmation of the operation will appear

![Screenshot 2023-07-01 155103](https://github.com/osama-maree/graduation-project/assets/108696087/1a9c744e-d66c-486e-baa6-25873ed1f057)
-

--- 

- Here are all completed transactions

![Screenshot 2023-07-01 155146](https://github.com/osama-maree/graduation-project/assets/108696087/5f09f238-67e0-491c-9d52-d854aeada0dc)
-

- When you click on the search icon, the transaction details appear 

![Screenshot 2023-07-01 155203](https://github.com/osama-maree/graduation-project/assets/108696087/03b4fdca-c04c-46e5-bd00-b8446e2e762e)
-

---

- When you click on View, the transaction details will appear
  
![screencapture-localhost-3001-emp-sale-comp-6469bcc563cc15a2ac1e7666-2023-07-01-15_52_21](https://github.com/osama-maree/graduation-project/assets/108696087/b4b80725-086b-4faa-bf01-f7069f2ae9cb)
-

---

- Here are all rejected transactions

![Screenshot 2023-07-01 162735](https://github.com/osama-maree/graduation-project/assets/108696087/9f8d45a5-a3b5-4a56-8061-a8a533b1d9bd)
-

---

- When inquiring from the various ministries
 1. The beginning of the inquiry from the Ministry of Interior about one of the citizens

![screencapture-localhost-3001-employee-internal-2023-07-01-17_50_01](https://github.com/osama-maree/graduation-project/assets/108696087/73d168ec-ea67-4b25-8903-d37933c6f2c2)
-

1.1 When you click View
  
![Screenshot 2023-07-01 174702](https://github.com/osama-maree/graduation-project/assets/108696087/53a63e65-930f-4936-8991-6dee645b1c70)
-

2. Inquiry from the Ministry of Foreign Affairs

![Screenshot 2023-07-01 175144](https://github.com/osama-maree/graduation-project/assets/108696087/55f52f44-394b-42f9-bc62-9bb788146ed4)
-

3. Inquiry from the Ministry of Finance

![Screenshot 2023-07-01 175244](https://github.com/osama-maree/graduation-project/assets/108696087/2aaf3124-46df-47cd-b60d-b8cd31210b0f)
-

4. We inquire from the municipality about two things

![Screenshot 2023-07-01 175342](https://github.com/osama-maree/graduation-project/assets/108696087/384d33a7-1331-4336-9eef-c00f9cbaa49b)
-

4.1 First, to inquire about land
 
![Screenshot 2023-07-01 175536](https://github.com/osama-maree/graduation-project/assets/108696087/63e87f49-db61-4f2e-a7c9-19f33c537482)
-

4.2 Secondly, to inquire about a clearance

![Screenshot 2023-07-01 175732](https://github.com/osama-maree/graduation-project/assets/108696087/4e3bb2df-4c31-47ce-b67f-f7d1855eab75)
-

5. When inquiring from the Area Department

![Screenshot 2023-07-01 175819](https://github.com/osama-maree/graduation-project/assets/108696087/400ba577-e29d-4d0b-8165-7eb6ec291829)
-

6. When inquiring from the Sharia Court
  
![Screenshot 2023-07-01 175851](https://github.com/osama-maree/graduation-project/assets/108696087/710d04ac-dadc-43c0-b9e7-a7a1477a25c3)
-

---

- From the accounts button, you can create a new account for a citizen or modify data

![Screenshot 2023-07-01 180405](https://github.com/osama-maree/graduation-project/assets/108696087/69aac108-f912-49fb-b835-c05c76e65409)
-

1. First, you can create an account from here

![Screenshot 2023-07-01 180638](https://github.com/osama-maree/graduation-project/assets/108696087/30a8992e-5b52-49e9-97f9-cf07b298866e)
-

2. Secondly here you can edit a citizen account

![Screenshot 2023-07-01 180717](https://github.com/osama-maree/graduation-project/assets/108696087/f8ae3e07-c1cf-41f4-afe5-afeb5a85f060)
-

---

> Third Actor -> Admin(Manager) <-

- Home Page

![screencapture-localhost-3001-Admin-2023-07-01-18_23_35](https://github.com/osama-maree/graduation-project/assets/108696087/89ba0309-2f05-4f1c-aaaa-4d08a91847bd)
-

---

- Here, vacations are given to employees or stopped

![Screenshot 2023-07-01 215644](https://github.com/osama-maree/graduation-project/assets/108696087/831d7aa6-d01c-49bd-8f0f-5de614740cdb)
-

---

- Here is the department staff workflow

![Screenshot 2023-07-01 215813](https://github.com/osama-maree/graduation-project/assets/108696087/1281b24f-e254-476c-b751-0f266b066fa2)
-

- When pressing on one of the types
  
![Screenshot 2023-07-01 215832](https://github.com/osama-maree/graduation-project/assets/108696087/b819c723-cdc9-4984-97e1-c9cbef3955dc)
-

---

- Here to count based on a specific condition
  
![Screenshot 2023-07-01 220005](https://github.com/osama-maree/graduation-project/assets/108696087/145f1088-1206-4dd0-8670-d4a3659f5b36)
-

---

- Here to create an account for a new employee in the department
  
![Screenshot 2023-07-01 220056](https://github.com/osama-maree/graduation-project/assets/108696087/a9e91726-0da7-478a-a382-91b71b5c4bda)
-

---

> Welcome to artificial intelligence
   - Here you can check the correct or fake links through artificial intelligence

![Screenshot 2023-07-01 220650](https://github.com/osama-maree/graduation-project/assets/108696087/c812fb54-8767-432a-96ff-4b136f32e4fe)
-

1. Fake link check
   
https://github.com/osama-maree/graduation-project/assets/108696087/9ae269b3-1790-47b7-a908-eebf63c124ff
-

---

> Entity RelationShip

![Entity RelationShip-Page-2 drawio (1)](https://github.com/osama-maree/graduation-project/assets/108696087/a8f845ea-8418-4646-aab8-6572e535dc0e)
-





















