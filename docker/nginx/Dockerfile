FROM nginx:1.27-alpine

# Кастомный конфиг копируется через bind-mount в compose,
# но на всякий случай кладём дефолт в образ
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80