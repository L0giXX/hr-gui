import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="div-main">
      <header>
        <nav>
          <a id="nav-a-main" href="#">HR GUI</a>
          <a href="#"> Dashboard </a>
          <a href="#"> Employees </a>
          <a href="#"> Departments </a>
          <a href="#"> Reports </a>
        </nav>
      </header>
      <main>
        <section class="w-full py-12 md:py-24 lg:py-32">
          <div class="container px-4 md:px-6">
            <div
              class="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to Acme Inc HR System
              </h1>
              <p
                class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                Manage your employees and departments with ease.
              </p>
            </div>
            <div
              class="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3"
            >
              <div class="grid gap-1">
                <a
                  class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Add New Employee
                </a>
              </div>
              <div class="grid gap-1">
                <a
                  class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Generate Report
                </a>
              </div>
              <div class="grid gap-1">
                <a
                  class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Manage Departments
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        class="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p class="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6">
          <a class="text-xs hover:underline underline-offset-2" href="#">
            Terms of Service </a
          ><a class="text-xs hover:underline underline-offset-2" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hr-gui';
}
