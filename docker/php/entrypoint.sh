#!/bin/sh
set -e

# Права на writable-каталоги Laravel (важно при bind-mount с Windows)
if [ -d /var/www/html/storage ]; then
    chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true
    chmod -R ug+rwX /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true
fi

exec "$@"