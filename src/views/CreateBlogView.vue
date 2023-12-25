<script>
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup'

    const schema = yup.object({
        blogTitle: yup.string().required('Blog title is required!'),
        blogAuthor: yup.string().required('Blog author is required!'),
        blogCategory: yup.string().required('Blog category is required!'),
        blogContent: yup.string().required('Blog content is required!'),
        blogImage: yup.string().required('Blog image is required!'),
    })

    export default {
        data() {
            return {
                isLoading: false,
                schema
            }
        },
        methods: {
            async promisePost(values, resetForm) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        fetch('http://localhost:3000/posts', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                id: new Date().getTime(),
                                title: values.blogTitle,
                                author: values.blogAuthor,
                                category: values.blogCategory,
                                content: values.blogContent,
                                image: values.blogImage,
                                date: new Date()
                            })
                        }).then(() => {
                            this.isLoading = false
                            resetForm()
                            resolve(201)
                        })
                    }, 3000);
                })
            },
            async handleSubmit(values, {resetForm}) {
                this.isLoading = true
                await this.promisePost(values, resetForm)
            }
        },
        components: {
            Form, Field, ErrorMessage
        }
    }
</script>

<template>
    <main class="container px-4 mt-10">
        <h1 class="text-2xl font-bold text-[#181818]">#Create-New-Blog</h1>
        <Form @submit="handleSubmit" :validation-schema="schema" class="p-5">
            <!-- BLOG TITLE -->
            <div class="form-control">
                <label for="blogTitle" class="form-label">Blog Title</label>
                <Field type="text" name="blogTitle" id="blogTitle" class="form-input" placeholder="Input blog title here..."/>
                <ErrorMessage name="blogTitle" class="form-input-error"/>
            </div>
            <!-- BLOG AUTHOR -->
            <div class="form-control">
                <label for="blogAuthor" class="form-label">Blog Author</label>
                <Field type="text" name="blogAuthor" id="blogAuthor" class="form-input" placeholder="Input blog author here..."/>
                <ErrorMessage name="blogAuthor" class="form-input-error"/>
            </div>
            <div class="form-control">
                <label for="blogCategory" class="form-label">Blog Category</label>
                <Field as="select" name="blogCategory" id="blogCategory" class="form-input">
                    <option value="" selected>Choose Category</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                </Field>
                <ErrorMessage name="blogCategory" class="form-input-error"/>
            </div>
            <div class="form-control">
                <label for="blogImage" class="form-label">Blog Image</label>
                <Field type="text" name="blogImage" id="blogImage" class="form-input" placeholder="Input blog image URL here..."/>
                <ErrorMessage name="blogImage" class="form-input-error"/>
            </div>
            <div class="form-control">
                <label for="blogContent" class="form-label">Blog Content</label>
                <Field rows="10" as="textarea" name="blogContent" id="blogContent" class="form-input" placeholder="Input blog content here..."/>
                <ErrorMessage name="blogContent" class="form-input-error"/>
            </div>
            <button :disabled="isLoading" type="submit" :class="[isLoading ? 'bg-gray-500 hover:bg-gray-500' : 'bg-blue-700 hover:bg-blue-800', 'mt-5 border-none outline-none text-white p-3 rounded-md']">
                {{ isLoading ? 'Loading...' : 'Submit new blog' }}
            </button>
        </Form>
    </main>
</template>



