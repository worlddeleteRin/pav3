from modeltranslation.translator import translator, TranslationOptions
from .models import Product, Category

class ProductTranslationOption(TranslationOptions):
    fields = (
        'name',
    )

class CategoryTranslationOption(TranslationOptions):
    fields = (
        'name',
    )

translator.register(Product, ProductTranslationOption)
translator.register(Category, CategoryTranslationOption)
