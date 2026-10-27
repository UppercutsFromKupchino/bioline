<?php

use Illuminate\Support\Facades\Route;

Route::get('/productslist', function (Request $request) {
    $products = [
        [
            'id' => 1,
            'title' => 'Тест',
            'price' => 2000,
            'rating' => 5.0,
            'reviews_count' => 70,
            'image' => 'test.jpg',
            'category' => 'Одежда'
        ],
        [
            'id' => 2,
            'title' => 'Увлажнитель',
            'price' => 5432,
            'rating' => 5.0,
            'reviews_count' => 70,
            'image' => '1.webp',
            'category' => 'Техника'
        ],
        [
            'id' => 3,
            'title' => 'Часы-пейджер',
            'price' => 5432,
            'rating' => 5.0,
            'reviews_count' => 70,
            'image' => '2.webp',
            'category' => 'Техника'
        ],
        [
            'id' => 4,
            'title' => 'Свитер',
            'price' => 5432,
            'rating' => 5.0,
            'reviews_count' => 70,
            'image' => '3.webp',
            'category' => 'Одежда'
        ],
    ];

    $category = request()->query('category');

    if ($category !== null) {
        $products = array_values(array_filter($products, function ($product) use ($category) {
            return $product['category'] === $category;
        }));
    }

    if (request()->filled('search')) {
        $search = request()->input('search');
        $products = array_filter($products, function ($p) use ($search) {
            return mb_stripos($p['title'], $search) !== false;
        });
    }

    return ['data' => $products];
});

Route::get('/categorieslist', function (Request $request) {
    return [
        'data' => [
            [
                'id' => 1,
                'title' => 'Одежда',
            ],
            [
                'id' => 2,
                'title' => 'Техника',
            ],
        ]
    ];
});
