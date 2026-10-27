FROM php:8.4-fpm-alpine

# Системные зависимости для сборки расширений
RUN apk add --no-cache \
    bash \
    git \
    curl \
    unzip \
    fcgi \
    libzip-dev \
    icu-dev \
    oniguruma-dev \
    $PHPIZE_DEPS

# PHP-расширения (без xml, gd — они не нужны фейковому API)
RUN docker-php-ext-install -j"$(nproc)" \
    pdo \
    pdo_mysql \
    mbstring \
    zip \
    opcache \
    intl \
    bcmath \
    pcntl

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# php-fpm-healthcheck (для healthcheck в compose)
ADD https://raw.githubusercontent.com/renatomefi/php-fpm-healthcheck/master/php-fpm-healthcheck /usr/local/bin/php-fpm-healthcheck
RUN chmod +x /usr/local/bin/php-fpm-healthcheck

# Конфиги
COPY php.ini /usr/local/etc/php/conf.d/99-app.ini
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /var/www/html

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["php-fpm"]