PGDMP                         z            calculator_db    11.14    11.14     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �
           1262    17971    calculator_db    DATABASE     �   CREATE DATABASE calculator_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';
    DROP DATABASE calculator_db;
             postgres    false            �            1259    17975    cal    TABLE     �   CREATE TABLE public.cal (
    first_no integer,
    second_no integer,
    res real,
    ope character varying(2),
    time_inserted timestamp without time zone
);
    DROP TABLE public.cal;
       public         postgres    false            �
          0    17975    cal 
   TABLE DATA               K   COPY public.cal (first_no, second_no, res, ope, time_inserted) FROM stdin;
    public       postgres    false    196   N       �
   �   x�}�11D��>�6T(�3��I�����.�t�i ����fl�f��ӳ�Gi���~ư��Yג��[��ǎ�R� �O��UË��<��Hl��c%:�Q�c�S�j�ʦO�����#z�� Έ/�     