<script>
    import { _ } from 'svelte-i18n';
</script>

<main class="dark:bg-dark-100">
    <section
        class="
        mx-auto 
        container 
        sm:px-6 
        lg:px-8 
        min-h-screen"
    >
        <h2 class="uppercase w-full h-[30vh] bg-green-600 grid place-items-center text-center text-4xl font-bold dark:text-white">
            {$_('footer.support.privacy policies')}
        </h2>
        <p class="p-4 dark:text-white">
            {$_('privacyPolicies.MainParagraph')}
        </p>
        <article class="font-semibold [&>h4]:pt-6 [&>h4]:pb-3 [&>h4]:text-yellow-900 dark:[&>h4]:text-yellow-400 [&>h4]:font-bold [&>h3]:font-bold py-4 px-4 dark:text-white">
            <h3>
                {$_('privacyPolicies.MainParagraph')}
            </h3>
            <h4>
                {$_('privacyPolicies.firstH4')}
            </h4>
            <p>
                {$_('privacyPolicies.firstP')}
            </p>
            <h4>
                {$_('privacyPolicies.secondH4')}
            </h4>
            <p>
                {$_('privacyPolicies.secondP')}
            </p>
            <h4>
                {$_('privacyPolicies.thirdH4')}
            </h4>
            <p>
                {$_('privacyPolicies.thirdP')}
            </p>
    
            <ul class="list-inside list-disc">
                <li>
                    {$_('privacyPolicies.thirdList.firstLi')}
                </li>
                <li>
                    {$_('privacyPolicies.thirdList.secondLi')}
                </li>
                <li>
                    {$_('privacyPolicies.thirdList.thirdLi')}
                </li>
            </ul>
            <h4>
                {$_('privacyPolicies.fourthH4')}
            </h4>
            <p>
                {$_('privacyPolicies.fourthP')}
            </p>
            <h4>
                {$_('privacyPolicies.fifthH4')}
            </h4>
            <p>
                {$_('privacyPolicies.fifthP')}
            </p>
            <h4>
                {$_('privacyPolicies.sixthH4')}
            </h4>
            <p>
                {$_('privacyPolicies.sixthP')}
            </p>
            <h4>
                {$_('privacyPolicies.seventhH4')}
            </h4>
            <p>
                {@html $_('privacyPolicies.seventhP')}
            </p>
        </article>
    </section>
</main>