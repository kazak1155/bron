Проект по бронированию (пока в процессе работы)(ранее уже делал проект просто на php сейчас с использованием front на vue и
вынесением методов из контроллеров в сервисы, чтобы сделать соблюсти концепцию "тонкие" контроллеры\
будет список отелей, в ним комнаты и возможность забронировать авторизированным пользователям\
также будет возможность оставлять комментарии к отелям, авторизированных пользователям\
по пользователям:
- Админ (царь и бог который может все)\
- менеджер отеля - имеет возможность редактировать определенный отель и его комнаты\
- обычный пользователь - возможность забронировать комнаты в отелях\
   
  основа:  
- back-laravel  
- 
  front-vue
  \
  Проект предусматривает регистрацию и авторизацию пользователй через JWT
  во front подключение Vue, vue-router, VueX (для реализации "одностраничного" сайта)
  база данных mysql
  \
  \
  Как все запустить:
1. скачать с Git
2. запустить в консолей "docker-compose up -d"
3. composer install
4. npm install
5. зайти в контейнер "project_app" через bash  и выполнить команду "php artisan migrate"
