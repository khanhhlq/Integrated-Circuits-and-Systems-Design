/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/rs-latch/design.v";
static int ng1[] = {0, 0};
static int ng2[] = {1, 0};
static unsigned int ng3[] = {1U, 1U};



static void Always_2_0(char *t0)
{
    char t13[8];
    char t29[8];
    char t43[8];
    char t59[8];
    char t67[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    unsigned int t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    char *t11;
    char *t12;
    char *t14;
    char *t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    unsigned int t19;
    unsigned int t20;
    unsigned int t21;
    unsigned int t22;
    unsigned int t23;
    unsigned int t24;
    unsigned int t25;
    unsigned int t26;
    unsigned int t27;
    char *t28;
    char *t30;
    unsigned int t31;
    unsigned int t32;
    unsigned int t33;
    unsigned int t34;
    unsigned int t35;
    char *t36;
    char *t37;
    unsigned int t38;
    unsigned int t39;
    unsigned int t40;
    char *t41;
    char *t42;
    char *t44;
    char *t45;
    unsigned int t46;
    unsigned int t47;
    unsigned int t48;
    unsigned int t49;
    unsigned int t50;
    unsigned int t51;
    unsigned int t52;
    unsigned int t53;
    unsigned int t54;
    unsigned int t55;
    unsigned int t56;
    unsigned int t57;
    char *t58;
    char *t60;
    unsigned int t61;
    unsigned int t62;
    unsigned int t63;
    unsigned int t64;
    unsigned int t65;
    char *t66;
    unsigned int t68;
    unsigned int t69;
    unsigned int t70;
    char *t71;
    char *t72;
    char *t73;
    unsigned int t74;
    unsigned int t75;
    unsigned int t76;
    unsigned int t77;
    unsigned int t78;
    unsigned int t79;
    unsigned int t80;
    char *t81;
    char *t82;
    unsigned int t83;
    unsigned int t84;
    unsigned int t85;
    unsigned int t86;
    unsigned int t87;
    unsigned int t88;
    unsigned int t89;
    unsigned int t90;
    int t91;
    int t92;
    unsigned int t93;
    unsigned int t94;
    unsigned int t95;
    unsigned int t96;
    unsigned int t97;
    unsigned int t98;
    char *t99;
    unsigned int t100;
    unsigned int t101;
    unsigned int t102;
    unsigned int t103;
    unsigned int t104;
    char *t105;
    char *t106;

LAB0:    t1 = (t0 + 2840U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(2, ng0);
    t2 = (t0 + 3160);
    *((int *)t2) = 1;
    t3 = (t0 + 2872);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(3, ng0);

LAB5:    xsi_set_current_line(4, ng0);
    t4 = (t0 + 1368U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB6;

LAB7:    xsi_set_current_line(22, ng0);

LAB89:    xsi_set_current_line(23, ng0);
    t2 = (t0 + 1768);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 1768);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 1, 0LL);
    xsi_set_current_line(24, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 1, 0LL);

LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(4, ng0);

LAB9:    xsi_set_current_line(5, ng0);
    t11 = (t0 + 1048U);
    t12 = *((char **)t11);
    t11 = ((char*)((ng1)));
    memset(t13, 0, 8);
    t14 = (t12 + 4);
    t15 = (t11 + 4);
    t16 = *((unsigned int *)t12);
    t17 = *((unsigned int *)t11);
    t18 = (t16 ^ t17);
    t19 = *((unsigned int *)t14);
    t20 = *((unsigned int *)t15);
    t21 = (t19 ^ t20);
    t22 = (t18 | t21);
    t23 = *((unsigned int *)t14);
    t24 = *((unsigned int *)t15);
    t25 = (t23 | t24);
    t26 = (~(t25));
    t27 = (t22 & t26);
    if (t27 != 0)
        goto LAB13;

LAB10:    if (t25 != 0)
        goto LAB12;

LAB11:    *((unsigned int *)t13) = 1;

LAB13:    memset(t29, 0, 8);
    t30 = (t13 + 4);
    t31 = *((unsigned int *)t30);
    t32 = (~(t31));
    t33 = *((unsigned int *)t13);
    t34 = (t33 & t32);
    t35 = (t34 & 1U);
    if (t35 != 0)
        goto LAB14;

LAB15:    if (*((unsigned int *)t30) != 0)
        goto LAB16;

LAB17:    t37 = (t29 + 4);
    t38 = *((unsigned int *)t29);
    t39 = *((unsigned int *)t37);
    t40 = (t38 || t39);
    if (t40 > 0)
        goto LAB18;

LAB19:    memcpy(t67, t29, 8);

LAB20:    t99 = (t67 + 4);
    t100 = *((unsigned int *)t99);
    t101 = (~(t100));
    t102 = *((unsigned int *)t67);
    t103 = (t102 & t101);
    t104 = (t103 != 0);
    if (t104 > 0)
        goto LAB32;

LAB33:    xsi_set_current_line(9, ng0);
    t2 = (t0 + 1048U);
    t3 = *((char **)t2);
    t2 = ((char*)((ng2)));
    memset(t13, 0, 8);
    t4 = (t3 + 4);
    t5 = (t2 + 4);
    t6 = *((unsigned int *)t3);
    t7 = *((unsigned int *)t2);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t4);
    t10 = *((unsigned int *)t5);
    t16 = (t9 ^ t10);
    t17 = (t8 | t16);
    t18 = *((unsigned int *)t4);
    t19 = *((unsigned int *)t5);
    t20 = (t18 | t19);
    t21 = (~(t20));
    t22 = (t17 & t21);
    if (t22 != 0)
        goto LAB39;

LAB36:    if (t20 != 0)
        goto LAB38;

LAB37:    *((unsigned int *)t13) = 1;

LAB39:    memset(t29, 0, 8);
    t12 = (t13 + 4);
    t23 = *((unsigned int *)t12);
    t24 = (~(t23));
    t25 = *((unsigned int *)t13);
    t26 = (t25 & t24);
    t27 = (t26 & 1U);
    if (t27 != 0)
        goto LAB40;

LAB41:    if (*((unsigned int *)t12) != 0)
        goto LAB42;

LAB43:    t15 = (t29 + 4);
    t31 = *((unsigned int *)t29);
    t32 = *((unsigned int *)t15);
    t33 = (t31 || t32);
    if (t33 > 0)
        goto LAB44;

LAB45:    memcpy(t67, t29, 8);

LAB46:    t72 = (t67 + 4);
    t94 = *((unsigned int *)t72);
    t95 = (~(t94));
    t96 = *((unsigned int *)t67);
    t97 = (t96 & t95);
    t98 = (t97 != 0);
    if (t98 > 0)
        goto LAB58;

LAB59:    xsi_set_current_line(13, ng0);
    t2 = (t0 + 1048U);
    t3 = *((char **)t2);
    t2 = ((char*)((ng1)));
    memset(t13, 0, 8);
    t4 = (t3 + 4);
    t5 = (t2 + 4);
    t6 = *((unsigned int *)t3);
    t7 = *((unsigned int *)t2);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t4);
    t10 = *((unsigned int *)t5);
    t16 = (t9 ^ t10);
    t17 = (t8 | t16);
    t18 = *((unsigned int *)t4);
    t19 = *((unsigned int *)t5);
    t20 = (t18 | t19);
    t21 = (~(t20));
    t22 = (t17 & t21);
    if (t22 != 0)
        goto LAB65;

LAB62:    if (t20 != 0)
        goto LAB64;

LAB63:    *((unsigned int *)t13) = 1;

LAB65:    memset(t29, 0, 8);
    t12 = (t13 + 4);
    t23 = *((unsigned int *)t12);
    t24 = (~(t23));
    t25 = *((unsigned int *)t13);
    t26 = (t25 & t24);
    t27 = (t26 & 1U);
    if (t27 != 0)
        goto LAB66;

LAB67:    if (*((unsigned int *)t12) != 0)
        goto LAB68;

LAB69:    t15 = (t29 + 4);
    t31 = *((unsigned int *)t29);
    t32 = *((unsigned int *)t15);
    t33 = (t31 || t32);
    if (t33 > 0)
        goto LAB70;

LAB71:    memcpy(t67, t29, 8);

LAB72:    t72 = (t67 + 4);
    t94 = *((unsigned int *)t72);
    t95 = (~(t94));
    t96 = *((unsigned int *)t67);
    t97 = (t96 & t95);
    t98 = (t97 != 0);
    if (t98 > 0)
        goto LAB84;

LAB85:    xsi_set_current_line(17, ng0);

LAB88:    xsi_set_current_line(18, ng0);
    t2 = ((char*)((ng3)));
    t3 = (t0 + 1768);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    xsi_set_current_line(19, ng0);
    t2 = ((char*)((ng3)));
    t3 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);

LAB86:
LAB60:
LAB34:    goto LAB8;

LAB12:    t28 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t28) = 1;
    goto LAB13;

LAB14:    *((unsigned int *)t29) = 1;
    goto LAB17;

LAB16:    t36 = (t29 + 4);
    *((unsigned int *)t29) = 1;
    *((unsigned int *)t36) = 1;
    goto LAB17;

LAB18:    t41 = (t0 + 1208U);
    t42 = *((char **)t41);
    t41 = ((char*)((ng2)));
    memset(t43, 0, 8);
    t44 = (t42 + 4);
    t45 = (t41 + 4);
    t46 = *((unsigned int *)t42);
    t47 = *((unsigned int *)t41);
    t48 = (t46 ^ t47);
    t49 = *((unsigned int *)t44);
    t50 = *((unsigned int *)t45);
    t51 = (t49 ^ t50);
    t52 = (t48 | t51);
    t53 = *((unsigned int *)t44);
    t54 = *((unsigned int *)t45);
    t55 = (t53 | t54);
    t56 = (~(t55));
    t57 = (t52 & t56);
    if (t57 != 0)
        goto LAB24;

LAB21:    if (t55 != 0)
        goto LAB23;

LAB22:    *((unsigned int *)t43) = 1;

LAB24:    memset(t59, 0, 8);
    t60 = (t43 + 4);
    t61 = *((unsigned int *)t60);
    t62 = (~(t61));
    t63 = *((unsigned int *)t43);
    t64 = (t63 & t62);
    t65 = (t64 & 1U);
    if (t65 != 0)
        goto LAB25;

LAB26:    if (*((unsigned int *)t60) != 0)
        goto LAB27;

LAB28:    t68 = *((unsigned int *)t29);
    t69 = *((unsigned int *)t59);
    t70 = (t68 & t69);
    *((unsigned int *)t67) = t70;
    t71 = (t29 + 4);
    t72 = (t59 + 4);
    t73 = (t67 + 4);
    t74 = *((unsigned int *)t71);
    t75 = *((unsigned int *)t72);
    t76 = (t74 | t75);
    *((unsigned int *)t73) = t76;
    t77 = *((unsigned int *)t73);
    t78 = (t77 != 0);
    if (t78 == 1)
        goto LAB29;

LAB30:
LAB31:    goto LAB20;

LAB23:    t58 = (t43 + 4);
    *((unsigned int *)t43) = 1;
    *((unsigned int *)t58) = 1;
    goto LAB24;

LAB25:    *((unsigned int *)t59) = 1;
    goto LAB28;

LAB27:    t66 = (t59 + 4);
    *((unsigned int *)t59) = 1;
    *((unsigned int *)t66) = 1;
    goto LAB28;

LAB29:    t79 = *((unsigned int *)t67);
    t80 = *((unsigned int *)t73);
    *((unsigned int *)t67) = (t79 | t80);
    t81 = (t29 + 4);
    t82 = (t59 + 4);
    t83 = *((unsigned int *)t29);
    t84 = (~(t83));
    t85 = *((unsigned int *)t81);
    t86 = (~(t85));
    t87 = *((unsigned int *)t59);
    t88 = (~(t87));
    t89 = *((unsigned int *)t82);
    t90 = (~(t89));
    t91 = (t84 & t86);
    t92 = (t88 & t90);
    t93 = (~(t91));
    t94 = (~(t92));
    t95 = *((unsigned int *)t73);
    *((unsigned int *)t73) = (t95 & t93);
    t96 = *((unsigned int *)t73);
    *((unsigned int *)t73) = (t96 & t94);
    t97 = *((unsigned int *)t67);
    *((unsigned int *)t67) = (t97 & t93);
    t98 = *((unsigned int *)t67);
    *((unsigned int *)t67) = (t98 & t94);
    goto LAB31;

LAB32:    xsi_set_current_line(5, ng0);

LAB35:    xsi_set_current_line(6, ng0);
    t105 = ((char*)((ng2)));
    t106 = (t0 + 1768);
    xsi_vlogvar_wait_assign_value(t106, t105, 0, 0, 1, 0LL);
    xsi_set_current_line(7, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB34;

LAB38:    t11 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t11) = 1;
    goto LAB39;

LAB40:    *((unsigned int *)t29) = 1;
    goto LAB43;

LAB42:    t14 = (t29 + 4);
    *((unsigned int *)t29) = 1;
    *((unsigned int *)t14) = 1;
    goto LAB43;

LAB44:    t28 = (t0 + 1208U);
    t30 = *((char **)t28);
    t28 = ((char*)((ng1)));
    memset(t43, 0, 8);
    t36 = (t30 + 4);
    t37 = (t28 + 4);
    t34 = *((unsigned int *)t30);
    t35 = *((unsigned int *)t28);
    t38 = (t34 ^ t35);
    t39 = *((unsigned int *)t36);
    t40 = *((unsigned int *)t37);
    t46 = (t39 ^ t40);
    t47 = (t38 | t46);
    t48 = *((unsigned int *)t36);
    t49 = *((unsigned int *)t37);
    t50 = (t48 | t49);
    t51 = (~(t50));
    t52 = (t47 & t51);
    if (t52 != 0)
        goto LAB50;

LAB47:    if (t50 != 0)
        goto LAB49;

LAB48:    *((unsigned int *)t43) = 1;

LAB50:    memset(t59, 0, 8);
    t42 = (t43 + 4);
    t53 = *((unsigned int *)t42);
    t54 = (~(t53));
    t55 = *((unsigned int *)t43);
    t56 = (t55 & t54);
    t57 = (t56 & 1U);
    if (t57 != 0)
        goto LAB51;

LAB52:    if (*((unsigned int *)t42) != 0)
        goto LAB53;

LAB54:    t61 = *((unsigned int *)t29);
    t62 = *((unsigned int *)t59);
    t63 = (t61 & t62);
    *((unsigned int *)t67) = t63;
    t45 = (t29 + 4);
    t58 = (t59 + 4);
    t60 = (t67 + 4);
    t64 = *((unsigned int *)t45);
    t65 = *((unsigned int *)t58);
    t68 = (t64 | t65);
    *((unsigned int *)t60) = t68;
    t69 = *((unsigned int *)t60);
    t70 = (t69 != 0);
    if (t70 == 1)
        goto LAB55;

LAB56:
LAB57:    goto LAB46;

LAB49:    t41 = (t43 + 4);
    *((unsigned int *)t43) = 1;
    *((unsigned int *)t41) = 1;
    goto LAB50;

LAB51:    *((unsigned int *)t59) = 1;
    goto LAB54;

LAB53:    t44 = (t59 + 4);
    *((unsigned int *)t59) = 1;
    *((unsigned int *)t44) = 1;
    goto LAB54;

LAB55:    t74 = *((unsigned int *)t67);
    t75 = *((unsigned int *)t60);
    *((unsigned int *)t67) = (t74 | t75);
    t66 = (t29 + 4);
    t71 = (t59 + 4);
    t76 = *((unsigned int *)t29);
    t77 = (~(t76));
    t78 = *((unsigned int *)t66);
    t79 = (~(t78));
    t80 = *((unsigned int *)t59);
    t83 = (~(t80));
    t84 = *((unsigned int *)t71);
    t85 = (~(t84));
    t91 = (t77 & t79);
    t92 = (t83 & t85);
    t86 = (~(t91));
    t87 = (~(t92));
    t88 = *((unsigned int *)t60);
    *((unsigned int *)t60) = (t88 & t86);
    t89 = *((unsigned int *)t60);
    *((unsigned int *)t60) = (t89 & t87);
    t90 = *((unsigned int *)t67);
    *((unsigned int *)t67) = (t90 & t86);
    t93 = *((unsigned int *)t67);
    *((unsigned int *)t67) = (t93 & t87);
    goto LAB57;

LAB58:    xsi_set_current_line(9, ng0);

LAB61:    xsi_set_current_line(10, ng0);
    t73 = ((char*)((ng1)));
    t81 = (t0 + 1768);
    xsi_vlogvar_wait_assign_value(t81, t73, 0, 0, 1, 0LL);
    xsi_set_current_line(11, ng0);
    t2 = ((char*)((ng2)));
    t3 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB60;

LAB64:    t11 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t11) = 1;
    goto LAB65;

LAB66:    *((unsigned int *)t29) = 1;
    goto LAB69;

LAB68:    t14 = (t29 + 4);
    *((unsigned int *)t29) = 1;
    *((unsigned int *)t14) = 1;
    goto LAB69;

LAB70:    t28 = (t0 + 1208U);
    t30 = *((char **)t28);
    t28 = ((char*)((ng1)));
    memset(t43, 0, 8);
    t36 = (t30 + 4);
    t37 = (t28 + 4);
    t34 = *((unsigned int *)t30);
    t35 = *((unsigned int *)t28);
    t38 = (t34 ^ t35);
    t39 = *((unsigned int *)t36);
    t40 = *((unsigned int *)t37);
    t46 = (t39 ^ t40);
    t47 = (t38 | t46);
    t48 = *((unsigned int *)t36);
    t49 = *((unsigned int *)t37);
    t50 = (t48 | t49);
    t51 = (~(t50));
    t52 = (t47 & t51);
    if (t52 != 0)
        goto LAB76;

LAB73:    if (t50 != 0)
        goto LAB75;

LAB74:    *((unsigned int *)t43) = 1;

LAB76:    memset(t59, 0, 8);
    t42 = (t43 + 4);
    t53 = *((unsigned int *)t42);
    t54 = (~(t53));
    t55 = *((unsigned int *)t43);
    t56 = (t55 & t54);
    t57 = (t56 & 1U);
    if (t57 != 0)
        goto LAB77;

LAB78:    if (*((unsigned int *)t42) != 0)
        goto LAB79;

LAB80:    t61 = *((unsigned int *)t29);
    t62 = *((unsigned int *)t59);
    t63 = (t61 & t62);
    *((unsigned int *)t67) = t63;
    t45 = (t29 + 4);
    t58 = (t59 + 4);
    t60 = (t67 + 4);
    t64 = *((unsigned int *)t45);
    t65 = *((unsigned int *)t58);
    t68 = (t64 | t65);
    *((unsigned int *)t60) = t68;
    t69 = *((unsigned int *)t60);
    t70 = (t69 != 0);
    if (t70 == 1)
        goto LAB81;

LAB82:
LAB83:    goto LAB72;

LAB75:    t41 = (t43 + 4);
    *((unsigned int *)t43) = 1;
    *((unsigned int *)t41) = 1;
    goto LAB76;

LAB77:    *((unsigned int *)t59) = 1;
    goto LAB80;

LAB79:    t44 = (t59 + 4);
    *((unsigned int *)t59) = 1;
    *((unsigned int *)t44) = 1;
    goto LAB80;

LAB81:    t74 = *((unsigned int *)t67);
    t75 = *((unsigned int *)t60);
    *((unsigned int *)t67) = (t74 | t75);
    t66 = (t29 + 4);
    t71 = (t59 + 4);
    t76 = *((unsigned int *)t29);
    t77 = (~(t76));
    t78 = *((unsigned int *)t66);
    t79 = (~(t78));
    t80 = *((unsigned int *)t59);
    t83 = (~(t80));
    t84 = *((unsigned int *)t71);
    t85 = (~(t84));
    t91 = (t77 & t79);
    t92 = (t83 & t85);
    t86 = (~(t91));
    t87 = (~(t92));
    t88 = *((unsigned int *)t60);
    *((unsigned int *)t60) = (t88 & t86);
    t89 = *((unsigned int *)t60);
    *((unsigned int *)t60) = (t89 & t87);
    t90 = *((unsigned int *)t67);
    *((unsigned int *)t67) = (t90 & t86);
    t93 = *((unsigned int *)t67);
    *((unsigned int *)t67) = (t93 & t87);
    goto LAB83;

LAB84:    xsi_set_current_line(13, ng0);

LAB87:    xsi_set_current_line(14, ng0);
    t73 = (t0 + 1768);
    t81 = (t73 + 56U);
    t82 = *((char **)t81);
    t99 = (t0 + 1768);
    xsi_vlogvar_wait_assign_value(t99, t82, 0, 0, 1, 0LL);
    xsi_set_current_line(15, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 1928);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 1, 0LL);
    goto LAB86;

}


extern void work_m_05279549412963466351_2631001700_init()
{
	static char *pe[] = {(void *)Always_2_0};
	xsi_register_didat("work_m_05279549412963466351_2631001700", "isim/tb_isim_beh.exe.sim/work/m_05279549412963466351_2631001700.didat");
	xsi_register_executes(pe);
}
